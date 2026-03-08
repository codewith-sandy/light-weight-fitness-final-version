import { MembershipPlans } from "@/components/membership/MembershipPlans";
import { CallToAction } from "@/components/cta/CallToAction";

export default function MembershipPage() {
  return (
    <div className="min-h-screen pt-20">
      <MembershipPlans />
      <CallToAction />
    </div>
  );
}
