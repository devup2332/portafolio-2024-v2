import { ComponentProps } from "react";

export interface SVGProps extends ComponentProps<"svg"> {
  theme?: "dark" | "light";
}
export type Icon =
  | "home"
  | "contact"
  | "projects"
  | "jobs"
  | "email"
  | "typescript"
  | "nodejs"
  | "react"
  | "figma"
  | "nextjs"
  | "css"
  | "expo"
  | "graphql"
  | "reactNative"
  | "nestjs"
  | "prisma"
  | "tailwindcss"
  | "storybook"
  | "redux"
  | "apollo"
  | "postgresql"
  | "vitejs"
  | "github"
  | "linkedin"
  | "instagram"
  | "firebase"
  | "javascript";
