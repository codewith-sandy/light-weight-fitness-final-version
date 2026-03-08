export type BMICategory =
  | "Severe Thinness"
  | "Moderate Thinness"
  | "Mild Thinness"
  | "Normal weight"
  | "Overweight"
  | "Obese Class I"
  | "Obese Class II"
  | "Obese Class III"
  | "Underweight (Child/Teen)"
  | "Healthy weight (Child/Teen)"
  | "At risk of overweight (Child/Teen)"
  | "Overweight (Child/Teen)";

export type UnitSystem = "metric" | "us";

export interface BMIResult {
  bmi: number;
  category: BMICategory;
  bmiPrime: number;
  ponderalIndex: number;
}

/**
 * Calculates BMI and related metrics for both Metric and US units.
 * 
 * @param weight Weight in kg (if metric) or lbs (if us)
 * @param height Height in cm (if metric) or inches (if us)
 * @param age Age in years
 * @param units The unit system used for weight/height
 */
export function calculateBMI(
  weight: number,
  height: number,
  age: number,
  units: UnitSystem = "metric"
): BMIResult {
  if (weight <= 0 || height <= 0) {
    return { bmi: 0, category: "Normal weight", bmiPrime: 0, ponderalIndex: 0 };
  }

  let bmi = 0;
  let ponderalIndex = 0;

  if (units === "metric") {
    // mass (kg) / height² (m)
    const heightM = height / 100;
    bmi = weight / (heightM * heightM);
    // mass (kg) / height³ (m)
    ponderalIndex = weight / Math.pow(heightM, 3);
  } else {
    // 703 * mass (lbs) / height² (in)
    bmi = (703 * weight) / (height * height);
    // mass (lbs) / height³ (in) is NOT the standard PI for US.
    // Specification says height (in) / ∛mass (lbs) for USC Units
    // But then shows SI Metric: mass (kg) / height³ (m)
    // I will implement PI based on the formula provided in the SI Metric units but adapted or follow PI spec.
    // Actually PI = mass/height^3. Let's convert to metric internally for PI if US to keep it simple.
    const weightKg = weight * 0.453592;
    const heightM = height * 0.0254;
    ponderalIndex = weightKg / Math.pow(heightM, 3);
  }

  const roundedBMI = Math.round(bmi * 100) / 100;
  const roundedPI = Math.round(ponderalIndex * 100) / 100;
  const bmiPrime = Math.round((bmi / 25) * 100) / 100;

  let category: BMICategory = "Normal weight";

  if (age < 20) {
    if (roundedBMI < 15) category = "Underweight (Child/Teen)";
    else if (roundedBMI < 22) category = "Healthy weight (Child/Teen)";
    else if (roundedBMI < 26) category = "At risk of overweight (Child/Teen)";
    else category = "Overweight (Child/Teen)";
  } else {
    if (roundedBMI < 16) category = "Severe Thinness";
    else if (roundedBMI < 17) category = "Moderate Thinness";
    else if (roundedBMI < 18.5) category = "Mild Thinness";
    else if (roundedBMI < 25) category = "Normal weight";
    else if (roundedBMI < 30) category = "Overweight";
    else if (roundedBMI < 35) category = "Obese Class I";
    else if (roundedBMI < 40) category = "Obese Class II";
    else category = "Obese Class III";
  }

  return {
    bmi: roundedBMI,
    category,
    bmiPrime,
    ponderalIndex: roundedPI
  };
}
