import { useTranslation } from "react-i18next";
import PrimaryButton from "../PrimeryButton/PrimeryButton";
import { bannerLinks } from "@/utils/bannerLinks";
import Spline from "@splinetool/react-spline";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/UI/tooltip";
import goToSection from "@/utils/goToSection";
import { useRef } from "react";
import { Application } from "@splinetool/runtime";

const scene3D = "https://prod.spline.design/GYXwEQLmwkLkmep0/scene.splinecode";

const BannerHome = () => {
  const splineRef = useRef<any>(null);
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
  return (
    <div
      className="appearAnimation opacity-0 h-screen flex justify-center items-center lg:grid lg:grid-cols-2 lg:gap-4 lg:h-screen xl:gap-16 appearAnimation"
      style={{
        animationDelay: "1s",
      }}
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
            goToSection("contact");
          }}
        >
          {t("home.banner.body.button")}
        </PrimaryButton>
      </div>
      <div
        className={
          "cursor-pointer transition-all h-96 hidden lg:block lg:justify-self-end object-cover overflow-hidden"
        }
        style={{
          width: `100%`,
          height: "100%",
        }}
      >
        <Spline scene={scene3D} onLoad={onLoad3D} />
      </div>
    </div>
  );
};

export default BannerHome;
