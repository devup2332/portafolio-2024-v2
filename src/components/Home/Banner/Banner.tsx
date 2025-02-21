import { useTranslation } from "react-i18next";
import CustomButton from "@/components/Home/CustomButton/CustomButton";
import Lottie from "react-lottie";
import BannerLottie from "@/lotties/banner.json";
import { bannerLinks } from "@/utils/bannerLinks";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";
import goToSection from "@/utils/goToSection";
import { motion } from "motion/react";

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
        <div className="items-center flex flex-col gap-3 lg:flex-row">
          <CustomButton
            className="bg-primary-color justify-self-center lg:justify-self-start lg:px-10 lg:text-base"
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
