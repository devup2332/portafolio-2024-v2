import CssIcon from "./components/Icons/CssIcon";
import ExpoIcon from "./components/Icons/ExpoIcon";
import FigmaIcon from "./components/Icons/FigmaIcon";
import GraphqlIcon from "./components/Icons/GraphqlIcon";
import JavascriptIcon from "./components/Icons/JavascriptIcon";
import NextJsIcon from "./components/Icons/NextJsIcon";
import NodejsIcon from "./components/Icons/NodejsIcon";
import ReactIcon from "./components/Icons/ReactIcon";
import TypescriptIcon from "./components/Icons/TypescriptIcon";
import { Project, Technologies } from "./types/icontypes";
import TailwindIcon from "./components/Icons/TailwindIcon";
import PostgresqlIcon from "./components/Icons/PostgresqlIcon";
import { SVGProps } from "react";

export const bannerImageUrl =
  "https://images.unsplash.com/photo-1467010234262-77bada75a47d?q=80&w=3373&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export const Icons: Record<Technologies, React.FC<SVGProps<SVGSVGElement>>> = {
  typescript: TypescriptIcon,
  nodejs: NodejsIcon,
  react: ReactIcon,
  reactNative: ReactIcon,
  figma: FigmaIcon,
  nextjs: NextJsIcon,
  css: CssIcon,
  expo: ExpoIcon,
  graphql: GraphqlIcon,
  javascript: JavascriptIcon,
  tailwindcss: TailwindIcon,
  postgresql: PostgresqlIcon,
};
export const experienceHistory = [
  {
    business: "Lapzo",
    period: "2022 - 2024",
    body: {
      en: [
        "Maintenance of the main application of the company developed with React, Vitejs, Hasura, Graphql and RadixUI",
        "During this work I was solving bugs and creating new functionalities for the application both in the backend and in the frontend",
      ],
      es: [
        "Mantenimiento de la aplicación principal de la empresa desarrollada con React, Vitejs, Hasura, Graphql y RadixUI",
        "Durante este trabajo estaba resolviendo errores y creando nuevas funcionalidades para la aplicación tanto en el backend como en el frontend",
      ],
    },
  },
  {
    business: "Inetum",
    period: "2021 - 2022",
    body: {
      en: [
        "Frontend development for an application developed with Nextjs, React, Express, Material UI, ApolloServer and GraphQL.",
        "Perform a redesign for the stock management application",
      ],
      es: [
        "Desarrollo frontend para una aplicación desarrollada con Nextjs, React, Express, Material UI, ApolloServer y GraphQL.",
        "Realizar un rediseño para la aplicación de gestión de stock",
      ],
    },
  },
  {
    business: "Jabu",
    period: "2021 - 2021",
    body: {
      en: [
        "I was part of the team that develops a new version of the sales application",
        "This application was developed with Redux, Next, Nodejs, React, Serverless Framkework using PostgreSql (Prisma)",
        "Something that was taken into account was the optimization of each aspect of the application",
      ],
      es: [
        "Fui parte del equipo que desarrolla una nueva versión de la aplicación de ventas",
        "Esta aplicación fue desarrollada con Redux, Next, Nodejs, React, Serverless Framkework usando PostgreSql (Prisma)",
        "Algo que se tuvo en cuenta fue la optimización de cada aspecto de la aplicación",
      ],
    },
  },
];

export const projects: Project[] = [
  {
    stack: ["react", "nodejs", "typescript", "figma", "javascript", "expo"],
    name: "Coffee App",
    links: [
      {
        name: "Github",
        url: "https://github.com/devup2332/coffee-app-v1",
      },
    ],
    urlImage:
      "https://res.cloudinary.com/dder8kjda/image/upload/v1728654817/Screenshot_2024-10-11_08-52-59_pdioar.png",
    descriptions: {
      en: "A coffe app developed with React native and expo as a framework. It has differents screens like payment, home, details, etc.",
      es: "Una aplicación de café desarrollada con React native y expo como framework. Tiene diferentes pantallas como pago, inicio, detalles, etc.",
    },
  },
  {
    stack: ["reactNative", "expo", "figma", "typescript", "nodejs"],
    name: "Airbnb Clone",
    links: [
      {
        name: "Github",
        url: "https://github.com/devup2332/airnbnb-clone",
      },
    ],
    urlImage:
      "https://res.cloudinary.com/dder8kjda/image/upload/v1730872212/Screenshot_2024-11-06_00-49-31_jrcyxa.png",
    descriptions: {
      en: "An clone of official Airbnb application. It allows you how to use react native and expo to create a mobile application.",
      es: "Un clon de la aplicación oficial de Airbnb. Te permite aprender cómo usar react native y expo para crear una aplicación móvil.",
    },
  },
  {
    stack: ["expo", "tailwindcss", "typescript", "postgresql", "reactNative"],
    name: "Uber Clone",
    links: [
      {
        name: "Github",
        url: "https://github.com/devup2332/uber-clone",
      },
    ],
    urlImage:
      "https://res.cloudinary.com/dder8kjda/image/upload/v1734137968/Screenshot_2024-12-13_19-58-50_yoilxy.png",
    descriptions: {
      en: "An application that emulate uber experience. It was developed with Expo, TailwindCSS for React Native, TypeScript, Expo Router and Zustand to manage the state.",
      es: "Una aplicación que emula la experiencia de uber. Fue desarrollado con Expo, TailwindCSS para React Native, TypeScript, Expo Router y Zustand para gestionar el estado.",
    },
  },
];
