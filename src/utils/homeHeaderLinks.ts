import { Section } from "./goToSection";

interface IHomeHeaderLink {
  label: string;
  path: string;
  sub: boolean;
  id: Section;
  active: boolean;
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
    sub: false,
    id: "banner",
    active: false,
  },
  {
    label: "home.banner.menu.experience",
    path: "/",
    sub: false,
    id: "experience",
    active: false,
  },

  {
    label: "home.banner.menu.projects",
    path: "/",
    sub: false,
    id: "projects",
    active: false,
  },
  {
    label: "home.banner.menu.contact",
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
