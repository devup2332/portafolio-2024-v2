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
import { useEffect, useRef, useState } from "react";
import Spline from "@splinetool/react-spline";
import { Application } from "@splinetool/runtime";
import { motion } from "motion/react";
import { sleep } from "@/utils/sleep";
import { LoaderIcon } from "@/components/Icons";

const scene3D = "https://prod.spline.design/GYXwEQLmwkLkmep0/scene.splinecode";

const BannerHome = () => {
  const splineRef = useRef<any>(null);
  const [loading, setLoading] = useState(true);

  const { t } = useTranslation();

  const onLoad3D = (spline: Application) => {
    const obj = spline.findObjectByName("Macbook Pro M1 Max 14 Inch");
    splineRef.current = obj;
    const scale = 0.26;
    if (splineRef.current) {
      splineRef.current.scale.x = scale;
      splineRef.current.scale.y = scale;
      splineRef.current.scale.z = scale;
    }
  };

  const load3D = async () => {
    await fetch(scene3D).then((res) => res.blob());
    await sleep(2000);
    setLoading(false);
  };

  useEffect(() => {
    load3D();
  }, []);
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
          "cursor-pointer transition-all hidden h-full place-items-center lg:grid lg:justify-self-end object-cover overflow-hidden w-full xl:h-[700px] translate-y-20"
        }
      >
        {loading ? (
          <LoaderIcon className="animate-spin w-6 h-6 text-primary-color stroke-current" />
        ) : (
          <Spline
            ref={splineRef}
            onLoad={onLoad3D}
            scene={scene3D}
            style={{
              width: "100%",
              height: "100%",
            }}
          />
        )}
      </div>
    </motion.div>
  );
};

export default BannerHome;
