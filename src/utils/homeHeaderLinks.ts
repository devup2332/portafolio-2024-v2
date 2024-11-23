import { SVGProps } from "react";
import { Section } from "./goToSection";
import { ICONS } from "./icons";

interface IHomeHeaderLink {
  label: string;
  path: string;
  sub: boolean;
  id?: Section;
  active: boolean;
  Icon?: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  visibleRange?: {
    start: number;
    end: number;
  };
  children?: {
    label: string;
    value: string;
  }[];
}
export const homeheaderLinks: IHomeHeaderLink[] = [
  {
    label: "home.banner.menu.home",
    path: "/",
    Icon: ICONS.home,
    sub: false,
    id: "banner",
    active: false,
  },
  {
    label: "home.banner.menu.experience",
    Icon: ICONS.jobs,
    path: "/",
    sub: false,
    id: "experience",
    active: false,
  },

  {
    label: "home.banner.menu.projects",
    Icon: ICONS.projects,
    path: "/",
    sub: false,
    id: "projects",
    active: false,
  },
  {
    label: "home.banner.menu.contact",
    Icon: ICONS.contact,
    path: "/",
    sub: false,
    id: "contact",
    active: false,
  },
  {
    label: "home.banner.menu.languages.label",
    path: "/",
    sub: true,
    active: false,
    children: [
      {
        label: "home.banner.menu.languages.english",
        value: "en",
      },
      {
        label: "home.banner.menu.languages.spanish",
        value: "es",
      },
    ],
  },
];
