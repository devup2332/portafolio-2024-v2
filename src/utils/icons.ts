import ContactIcon from "@/components/Icons/ContactIcon";
import EmailIcon from "@/components/Icons/EmailIcon";
import HomeIcon from "@/components/Icons/HomeIcon";
import JobsIcon from "@/components/Icons/JobsIcon";
import ProjectsIcon from "@/components/Icons/ProjectsIcon";
import CssIcon from "@/components/Icons/CssIcon";
import ExpoIcon from "@/components/Icons/ExpoIcon";
import FigmaIcon from "@/components/Icons/FigmaIcon";
import GraphqlIcon from "@/components/Icons/GraphqlIcon";
import JavascriptIcon from "@/components/Icons/JavascriptIcon";
import NextJsIcon from "@/components/Icons/NextJsIcon";
import NodejsIcon from "@/components/Icons/NodejsIcon";
import ReactIcon from "@/components/Icons/ReactIcon";
import TypescriptIcon from "@/components/Icons/TypescriptIcon";
import TailwindIcon from "@/components/Icons/TailwindIcon";
import PostgresqlIcon from "@/components/Icons/PostgresqlIcon";
import ReduxIcon from "@/components/Icons/ReduxIcon";
import NestJsIcon from "@/components/Icons/NestJsIcon";
import PrismaIcon from "@/components/Icons/PrismaIcon";
import VitejsIcon from "@/components/Icons/VitejsIcon";
import StorybookIcon from "@/components/Icons/StorybookIcon";
import ApolloIcon from "@/components/Icons/ApolloIcon";
import { Icon, SVGProps } from "@/types/icontypes";
import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";
import FirebaseIcon from "@/components/Icons/FirebaseIcon";

export const ICONS: Record<Icon, React.FC<SVGProps>> = {
  home: HomeIcon,
  contact: ContactIcon,
  projects: ProjectsIcon,
  jobs: JobsIcon,
  email: EmailIcon,
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
  redux: ReduxIcon,
  prisma: PrismaIcon,
  nestjs: NestJsIcon,
  vitejs: VitejsIcon,
  storybook: StorybookIcon,
  apollo: ApolloIcon,
  instagram: InstagramIcon,
  linkedin: LinkedinIcon,
  github: GithubIcon,
  firebase: FirebaseIcon,
};
