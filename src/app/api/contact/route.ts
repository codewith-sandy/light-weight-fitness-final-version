import { NextResponse } from "next/server";
import rateLimit from "@/lib/rate-limit";
import { ContactFormSchema } from "@/lib/validations";

// Initialize standard generalized rate limiter: Max 5 requests per minute per IP
const limiter = rateLimit({
    uniqueTokenPerInterval: 500,
    interval: 60000,
});

export async function POST(req: Request) {
    try {
        // 1. Rate Limiting Protection (Identify by IP)
        const ip = req.headers.get("x-forwarded-for") || "unknown";
        try {
            await limiter.check(5, ip); // 5 requests per minute
        } catch {
            return NextResponse.json(
                { message: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        // 2. Parse & Validate Payload strictly using Zod schema
        const body = await req.json();
        const validatedData = ContactFormSchema.safeParse(body);

        if (!validatedData.success) {
            return NextResponse.json(
                { message: "Invalid payload submitted", errors: validatedData.error.issues },
                { status: 400 }
            );
        }

        // 3. Fallback to server-side API key (Removed from Client)
        const accessKey = process.env.WEB3FORMS_ACCESS_KEY || "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

        // 4. Dispatch purely server-side
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify({
                access_key: accessKey,
                ...validatedData.data,
            }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json({ message: "Success" }, { status: 200 });
        } else {
            console.error("Web3Forms API Error:", result);
            return NextResponse.json(
                { message: "Failed to submit form to upstream API" },
                { status: 500 }
            );
        }
    } catch (error) {
        console.error("Contact API Server Error:", error);
        return NextResponse.json(
            { message: "Internal server error processing report" },
            { status: 500 }
        );
    }
}
