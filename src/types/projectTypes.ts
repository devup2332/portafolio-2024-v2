import { Icon } from "./icontypes";

export interface Link {
  name: string;
  url: string;
}

export interface Stack {
  name: string;
  icon: Icon;
}

export interface Project {
  stack: Stack[];
  name: string;
  links: Link[];
  urlImage: string;
  descriptions: {
    en: string;
    es: string;
  };
}
