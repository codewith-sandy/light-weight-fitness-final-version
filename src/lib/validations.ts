import { z } from "zod";

// Shared sanitization functions
const sanitizeString = (str: string) => str.trim().replace(/[<>]/g, ""); // Prevent basic XSS

// -----------------------------------------------------------------------------
// Contact Form Schema
// -----------------------------------------------------------------------------
export const ContactFormSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name cannot exceed 50 characters")
        .transform(sanitizeString),
    email: z
        .string()
        .email("Please provide a valid email address")
        .max(100, "Email cannot exceed 100 characters")
        .transform(sanitizeString),
    phone: z
        .string()
        .regex(/^\+?[0-9\s\-()]{10,20}$/, "Please provide a valid phone number")
        .transform(sanitizeString),
    subject: z
        .enum(["Membership Inquiry", "Personal Training", "General Question", "Feedback/Other"])
        .optional(),
    plan: z.string().optional(),
    addOns: z.array(z.string()).optional(),
    message: z
        .string()
        .min(5, "Message must be at least 5 characters")
        .max(2000, "Message cannot exceed 2000 characters")
        .transform(sanitizeString)
        .optional(),
});

export type ContactFormInput = z.infer<typeof ContactFormSchema>;

// -----------------------------------------------------------------------------
// Calculator (BMI) Form Schema
// -----------------------------------------------------------------------------
export const CalculatorFormSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters").transform(sanitizeString).optional(),
    email: z.string().email("Please provide a valid email address").transform(sanitizeString).optional(),
    contactNumber: z.string().optional(),
    goal: z.string().optional(),
    age: z
        .number({ invalid_type_error: "Age must be a number" })
        .min(2, "Age must be at least 2")
        .max(100, "Age cannot exceed 100"),
    gender: z.enum(["male", "female", "other"], {
        errorMap: () => ({ message: "Please select a valid gender" })
    }).optional(),
    unit: z.enum(["metric", "imperial", "us"]).optional(),
    height: z
        .number({ invalid_type_error: "Height must be a valid number" })
        .min(50, "Height is too low")
        .max(300, "Height is unusually high")
        .optional(),
    heightFt: z.number().optional(),
    heightIn: z.number().optional(),
    weight: z
        .number({ invalid_type_error: "Weight must be a valid number" })
        .min(20, "Weight is too low")
        .max(500, "Weight is unusually high")
        .optional(),
});

export type CalculatorFormInput = z.infer<typeof CalculatorFormSchema>;
