import { useTranslation } from "react-i18next";
import CustomButton from "@/components/Home/CustomButton/CustomButton";
import Lottie from "react-lottie";
import BannerLottie from "@/lotties/banner.json";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";
import { motion } from "motion/react";
import { bannerLinks } from "@/utils/links/bannerLinks";
import { goToSection } from "@/utils/methods";

const BannerHome = () => {
  const { t } = useTranslation();
  return (
    <motion.div
      className="h-screen flex justify-center items-center lg:flex-row lg:gap-4 lg:h-screen xl:gap-16"
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
      <div className="grid gap-4 lg:gap-8 lg:w-5/12">
        <p className="font-bold text-primary-color text-lg lg:text-left">
          {t("home.banner.body.greeting")}
        </p>
        <h1 className="text-text-color-1 text-5xl lg:text-6xl xl:text-8xl font-bold">
          {t("home.banner.body.name")}
        </h1>
        <h2 className="font-normal text-sm text-left lg:text-left lg:text-base xl:text-xl">
          {t("home.banner.body.greeting2")}{" "}
          <span className="text-primary-color font-bold">
            {t("home.banner.body.role")}
          </span>
        </h2>
        <p className="font-normal text-sm text-left lg:text-base">
          {t("home.banner.body.description")}
        </p>
        <div className="flex gap-3 justify-start w-full xl:gap-5">
          {bannerLinks.map((item, index) => (
            <TooltipProvider key={index}>
              <Tooltip key={index}>
                <TooltipTrigger>
                  <a href={item.link} target="_blank">
                    <item.Icon className="w-8 h-8 hover:text-primary-color" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>{item.tooptip}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
        <div className="flex gap-3 lg:flex-row">
          <CustomButton
            className="bg-primary-color text-white justify-self-center lg:justify-self-start lg:px-10 lg:text-base"
            onClick={() => {
              goToSection("contact");
            }}
          >
            {t("home.banner.body.button1")}
          </CustomButton>
          <a href="cv.pdf" download="cv.pdf">
            <CustomButton
              className="justify-self-center lg:justify-self-start lg:px-10 lg:text-base hover:bg-button-hover"
              variant="ghost"
            >
              {t("home.banner.body.button2")}
            </CustomButton>
          </a>
        </div>
      </div>
      <div
        className={
          "pointer-events-none transition-all hidden place-items-center lg:grid lg:justify-self-end object-cover overflow-hidden w-[400px] h-[400px] xl:w-[600px] xl:h-[600px] 2xl:w-[700px] 2xl:h-[700px]"
        }
      >
        <Lottie
          options={{
            loop: true,
            autoplay: true,
            animationData: BannerLottie,
          }}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
    </motion.div>
  );
};

export default BannerHome;
