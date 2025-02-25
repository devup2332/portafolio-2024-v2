import { ComponentProps } from "react";

export type SVGProps = ComponentProps<"svg">;

export type Technologies =
  | "typescript"
  | "nodejs"
  | "react"
  | "figma"
  | "nextjs"
  | "css"
  | "expo"
  | "graphql"
  | "reactNative"
  | "tailwindcss"
  | "postgresql"
  | "javascript";

export interface Link {
  name: string;
  url: string;
}

export interface Project {
  stack: Technologies[];
  name: string;
  links: Link[];
  urlImage: string;
  descriptions: {
    en: string;
    es: string;
  };
}
