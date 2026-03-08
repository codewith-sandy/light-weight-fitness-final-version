export type BMICategory = "Underweight" | "Normal" | "Overweight" | "Obese";

export function calculateBMI(weightKg: number, heightCm: number): { bmi: number; category: BMICategory } {
  if (weightKg <= 0 || heightCm <= 0) {
    return { bmi: 0, category: "Normal" };
  }

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  
  // Format to 1 decimal place
  const roundedBMI = Math.round(bmi * 10) / 10;

  let category: BMICategory = "Normal";
  if (roundedBMI < 18.5) {
    category = "Underweight";
  } else if (roundedBMI >= 18.5 && roundedBMI <= 24.9) {
    category = "Normal";
  } else if (roundedBMI >= 25 && roundedBMI <= 29.9) {
    category = "Overweight";
  } else if (roundedBMI >= 30) {
    category = "Obese";
  }

  return { bmi: roundedBMI, category };
}
