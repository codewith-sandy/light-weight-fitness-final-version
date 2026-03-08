import { Dashboard } from "@/components/dashboard/Dashboard";
import { BMICategory } from "@/lib/bmi";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const params = await searchParams;
  const name = typeof params.name === "string" ? params.name : "Athlete";
  const age = typeof params.age === "string" ? parseInt(params.age) : 25;
  const bmi = typeof params.bmi === "string" ? parseFloat(params.bmi) : 22.5;
  const category = (typeof params.category === "string" ? params.category : "Normal weight") as BMICategory;
  const prime = typeof params.prime === "string" ? parseFloat(params.prime) : bmi / 25;
  const pi = typeof params.pi === "string" ? parseFloat(params.pi) : 12.5;
  const gender = typeof params.gender === "string" ? params.gender : "not specified";
  const goal = typeof params.goal === "string" ? params.goal : "General Fitness";

  return (
    <div className="min-h-screen">
      <Dashboard 
        name={name} 
        age={age} 
        bmi={bmi} 
        category={category} 
        bmiPrime={prime} 
        ponderalIndex={pi} 
        gender={gender}
        goal={goal}
      />
    </div>
  );
}
