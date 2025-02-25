import { Icons, projects } from "@/data";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      id="projects"
      ref={containerRef}
      initial={{
        translateX: "200px",
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
      <h1 className="text-primary-color text-left text-4xl font-bold lg:text-center lg:text-6xl">
        {t("home.projects.title")}
      </h1>
      <p className="mt-2 lg:text-center lg:mt-6 lg:text-lg">
        {t("home.projects.subtitle")}
      </p>

      <div className="mt-12 grid gap-12 pb-28 lg:mt-24 lg:max-w-4xl justify-self-center">
        {projects.map((p, index) => {
          return (
            <motion.div
              key={index}
              className="flex flex-col lg:flex-row gap-6 2xl:gap-12"
              initial={{
                translateY: "150px",
                opacity: 0,
              }}
              whileInView={{
                translateY: "0px",
                opacity: 1,
              }}
              transition={{
                delay: (index + 1) * 0.3,
                duration: 0.5,
                ease: "linear",
              }}
              viewport={{
                once: true,
              }}
            >
              <img
                src={p.urlImage}
                alt={p.name}
                className="w-full h-60 lg:w-[440px] lg:h-[300px] rounded-xl object-cover block aspect-video"
              />
              <div className="transition-all flex flex-col gap-6">
                <h2 className="font-bold text-3xl">{p.name}</h2>
                <p className="text-sm text-text-color-1">
                  {p.descriptions[i18n.language as "en" | "es"]}
                </p>

                <p className="font-bold text-sm text-primary-color">
                  {t("home.projects.items.stack")}
                </p>
                <div className="flex items-center flex-wrap gap-x-6 gap-y-2">
                  {p.stack.map((s, i) => {
                    const Icon = Icons[s];
                    return <Icon className="w-8 h-fit" key={i} />;
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Projects;
