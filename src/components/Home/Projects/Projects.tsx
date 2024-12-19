import { projects } from "@/data";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";

const Projects = () => {
  const { t, i18n } = useTranslation();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {}, []);
  return (
    <div id="projects" ref={containerRef}>
      <h1 className="text-primary-color text-4xl font-bold text-center lg:text-6xl">
        {t("home.projects.title")}
      </h1>

      <div className="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 gap-12 pb-28">
        {projects.map((p, index) => {
          return (
            <motion.div
              key={index}
              className="rounded-xl overflow-hidden relative group cursor-pointer grid"
              onClick={() => p.links && window.open(p.links[0]?.url, "_blank")}
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
                className="w-full h-full object-cover block"
                style={{
                  aspectRatio: "16/12",
                }}
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end gap-3 p-4 sm:p-10">
                <h2 className="font-bold">{p.name}</h2>
                <p className="text-sm">
                  {p.descriptions[i18n.language as "en" | "es"]}
                </p>
                <div className="flex flex-wrap gap-x-3 gap-y-2">
                  {p.stack.map((s, i) => {
                    return (
                      <span
                        className="bg-primary-color rounded-3xl px-2 py-1 text-xs"
                        key={i}
                      >
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
