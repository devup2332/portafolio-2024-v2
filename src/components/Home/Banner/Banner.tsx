import { useTranslation } from "react-i18next";
import PrimaryButton from "../PrimeryButton/PrimeryButton";
import { bannerImageUrl } from "@/data";
import { bannerLinks } from "@/utils/bannerLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";

const BannerHome = () => {
  const { t } = useTranslation();
  return (
    <div
      className="h-screen flex justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:h-screen xl:gap-16"
      id="banner"
    >
      <div className="grid gap-4 lg:gap-6">
        <h1 className="font-bold text-4xl w-full text-center lg:text-left lg:text-6xl xl:text-8xl">
          {t("home.banner.body.greeting")}{" "}
          <span className="text-primary-color">
            {t("home.banner.body.name")}
          </span>
        </h1>
        <h2 className="font-bold text-sm text-center lg:text-left lg:text-base xl:text-xl">
          {t("home.banner.body.greeting2")}{" "}
          <span className="text-primary-color">
            {t("home.banner.body.role")}
          </span>
        </h2>
        <p className="text-sm text-center lg:text-left lg:text-base">
          {t("home.banner.body.description")}
        </p>
        <div className="flex gap-3 justify-center w-full lg:justify-start xl:gap-5">
          {bannerLinks.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip key={index}>
                <TooltipTrigger>
                  <a href={item.link} target="_blank">
                    <item.Icon className="text-primary-color w-8 h-8" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.tooptip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <PrimaryButton
          className="justify-self-center lg:justify-self-start lg:px-10 lg:text-base"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          {t("home.banner.body.button")}
        </PrimaryButton>
      </div>
      <img
        src={bannerImageUrl}
        alt="Profile Image"
        className="cursor-pointer transition-all boxShadow hidden lg:block lg:w-[400px] lg:h-[400px] lg:justify-self-end object-cover rounded-full xl:w-[500px] xl:h-[500px]"
      />
    </div>
  );
};

export default BannerHome;
