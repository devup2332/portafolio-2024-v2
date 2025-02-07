import { useTranslation } from "react-i18next";
import PrimaryButton from "../PrimeryButton/PrimeryButton";
import { bannerLinks } from "@/utils/bannerLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";
import goToSection from "@/utils/goToSection";
import { motion } from "motion/react";
import BannerVector from "@/components/Vectors/BannerVector";

const BannerHome = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="h-screen flex justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:h-screen xl:gap-16"
      id="banner"
      initial={{
        translateX: "200px",
        opacity: 0,
      }}
      whileInView={{
        translateX: "0px",
        opacity: 1,
      }}
      translate="yes"
      transition={{
        delay: 0.8,
        easings: "easeInOut",
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
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
        <p className="font-normal text-sm text-center lg:text-left lg:text-base">
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
            goToSection("contact");
          }}
        >
          {t("home.banner.body.button")}
        </PrimaryButton>
      </div>
      <div
        className={
          "cursor-pointer transition-all hidden place-items-center lg:grid lg:justify-self-end object-cover overflow-hidden w-full h-fit"
        }
      >
        <BannerVector className="w-full h-full text-primary-color fill-current" />
      </div>
    </motion.div>
  );
};

export default BannerHome;
