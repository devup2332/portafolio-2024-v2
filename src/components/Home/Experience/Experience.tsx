import { experienceHistory } from "@/data";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const ExperienceHome = () => {
  const { t } = useTranslation();
  return (
    <div className="pb-28" id="experience">
      <h1 className="text-primary-color text-4xl font-bold text-center lg:text-6xl">
        {t("home.experience.title")}
      </h1>
      <div className="mt-16 flex lg:max-w-5xl mx-auto">
        <div className="hidden lg:grid">
          {experienceHistory.map((item, index) => {
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
                {item.body.map((b, i) => {
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
          {experienceHistory.map((item, index) => {
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
                {item.body.map((b, i) => {
                  return (
                    <p
                      className={twMerge(
                        !isPar ? "opacity-100" : "lg:opacity-0",
                        "text-sm xl:text-base"
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
    </div>
  );
};

export default ExperienceHome;
