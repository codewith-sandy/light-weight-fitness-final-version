declare module "lucide-react" {
  import { FC, SVGProps } from "react";
  
  export interface LucideProps extends SVGProps<SVGSVGElement> {
    size?: string | number;
    absoluteStrokeWidth?: boolean;
    color?: string;
  }
  
  export type Icon = FC<LucideProps>;

  export const Home: Icon;
  export const Calculator: Icon;
  export const Trophy: Icon;
  export const MapPin: Icon;
  export const Utensils: Icon;
  export const CreditCard: Icon;
  export const Phone: Icon;
  export const ArrowRight: Icon;
  export const Flame: Icon;
  export const Dumbbell: Icon;
  export const Apple: Icon;
  export const Activity: Icon;
  export const ChevronLeft: Icon;
  export const ChevronRight: Icon;
  export const Quote: Icon;
  export const PlayCircle: Icon;
  export const Coffee: Icon;
  export const UtensilsCrossed: Icon;
  export const Moon: Icon;
  export const Check: Icon;
  export const PhoneCall: Icon;
  export const Clock: Icon;
  export const Mail: Icon;
  export const ArrowLeft: Icon;
  export const Menu: Icon;
  export const X: Icon;
  export const Image: Icon;
  export const Maximize2: Icon;
  export const Instagram: Icon;
}
