import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import "./Experience.module.css";
import { motion } from "motion/react";
import { experiences } from "@/utils/data/experienceData";

const ExperienceHome = () => {
  const { t, i18n } = useTranslation();
  return (
    <motion.div
      className="pb-28 mt-2 container"
      id="experience"
      initial={{
        translateX: "-200px",
        opacity: 0,
      }}
      whileInView={{
        translateX: "0px",
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        easings: "easeInOut",
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
    >
      <h1 className="text-primary-color text-4xl font-bold text-center lg:text-6xl">
        {t("home.experience.title")}
      </h1>
      <div className="mt-16 flex lg:max-w-5xl mx-auto">
        <div className="hidden lg:grid">
          {experiences.map((item, index) => {
            const isPar = index % 2 === 0;
            return (
              <div
                className="px-10 pt-5 pb-20 relative grid gap-3"
                style={{
                  opacity: isPar ? 1 : 0,
                }}
                key={index}
              >
                <h2 className="text-right">
                  <span className="text-primary-color font-bold text-xl">
                    {item.business}
                  </span>
                  <span> - </span>
                  <span>{item.period}</span>
                </h2>
                {item.body[i18n.language as "en" | "es"].map((b, i) => {
                  return (
                    <p className="text-sm text-right lg:text-base" key={i}>
                      {b}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
        <div className="grid ">
          {experiences.map((item, index) => {
            const isPar = index % 2 === 0;
            return (
              <div
                className="border-l-primary-color border-l-8 px-10 pt-5 pb-20 relative grid gap-3"
                key={index}
              >
                <div className="cursor-pointer absolute -top-4 -left-6 w-10 h-10 bg-primary-color rounded-full boxShadow" />
                <h2 className={!isPar ? "opacity-100" : "lg:opacity-0"}>
                  <span className="text-primary-color font-bold text-xl">
                    {item.business}
                  </span>
                  <span> - </span>
                  <span>{item.period}</span>
                </h2>
                {item.body[i18n.language as "en" | "es"].map((b, i) => {
                  return (
                    <p
                      className={twMerge(
                        !isPar ? "opacity-100" : "lg:opacity-0",
                        "text-sm xl:text-base",
                      )}
                      key={i}
                    >
                      {b}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </motion.div>
  );
};

export default ExperienceHome;
