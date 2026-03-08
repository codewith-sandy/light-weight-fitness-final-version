import { Dashboard } from "@/components/dashboard/Dashboard";
import { BMICategory } from "@/lib/bmi";

export default function DashboardPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const name = typeof searchParams.name === "string" ? searchParams.name : "Athlete";
  const bmi = typeof searchParams.bmi === "string" ? parseFloat(searchParams.bmi) : 22.5;
  const category = (typeof searchParams.category === "string" ? searchParams.category : "Normal") as BMICategory;

  return (
    <div className="min-h-screen">
      <Dashboard name={name} bmi={bmi} category={category} />
    </div>
  );
}
