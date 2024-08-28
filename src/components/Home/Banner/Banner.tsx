import { GithubIcon, InstagramIcon, LinkedinIcon } from "@/components/Icons";
import { useTranslation } from "react-i18next";
import PrimaryButton from "../PrimeryButton/PrimeryButton";
import { bannerImageUrl } from "@/data";

const links = [
  {
    Icon: InstagramIcon,
    link: "https://www.instagram.com/",
  },
  {
    Icon: LinkedinIcon,
    link: "https://www.instagram.com/",
  },
  {
    Icon: GithubIcon,
    link: "https://www.instagram.com/",
  },
];

const BannerHome = () => {
  const { t } = useTranslation();
  return (
    <div className="h-[calc(100vh-70px)] flex justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:h-[calc(100vh-100px)] xl:gap-16">
      <div className="grid gap-4 lg:gap-6">
        <h1 className="font-bold text-4xl w-full text-center lg:text-left lg:text-6xl xl:text-8xl">
          {t("home.banner.body.greeting")}{" "}
          <span className="text-primary-color">
            {t("home.banner.body.name")}
          </span>
        </h1>
        <h2 className="font-bold text-sm text-center lg:text-left lg:text-base">
          {t("home.banner.body.greeting2")}{" "}
          <span className="text-primary-color">
            {t("home.banner.body.role")}
          </span>
        </h2>
        <p className="text-sm text-center lg:text-left lg:text-base">
          {t("home.banner.body.description")}
        </p>
        <div className="flex gap-3 justify-center w-full lg:justify-start xl:gap-5">
          {links.map((item, index) => (
            <a href={item.link} target="_blank" key={index}>
              <item.Icon className="text-primary-color w-8 h-8" />
            </a>
          ))}
        </div>
        <PrimaryButton className="justify-self-center lg:justify-self-start lg:px-10 lg:text-base">
          {t("home.banner.body.button")}
        </PrimaryButton>
      </div>
      <img
        src={bannerImageUrl}
        alt="Profile Image"
        className="hidden lg:block lg:w-[400px] lg:h-[400px] lg:justify-self-end object-cover rounded-full xl:w-[500px] xl:h-[500px]"
      />
    </div>
  );
};

export default BannerHome;
