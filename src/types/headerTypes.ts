import { Section } from "./generalTypes";
import { SVGProps } from "./icontypes";

export type HeaderLink = {
  label: string;
  path: string;
  sub: boolean;
  id?: Section;
  active: boolean;
  Icon?: React.FC<SVGProps>;
  visibleRange?: {
    start: number;
    end: number;
  };
  children?: {
    label: string;
    value: string;
  }[];
};
