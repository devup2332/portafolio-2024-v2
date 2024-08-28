import { projects } from "@/data";
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="text-primary-color text-4xl font-bold text-center lg:text-6xl">
        {t("home.projects.title")}
      </h1>

      <div className="mt-24 grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
        {projects.map((p, index) => {
          return (
            <div
              key={index}
              className="rounded-xl overflow-hidden relative group cursor-pointer transition-all"
            >
              <img
                src={p.urlImage}
                alt={"image " + index + 1}
                className="block object-cover"
              />
              <div className="absolute top-0 left-0 w-full h-full bg-black/60 opacity-0 group-hover:opacity-100 transition-all flex flex-col justify-end gap-3 p-4 sm:p-10">
                <h2 className="font-bold">{p.name}</h2>
                <p className="text-sm">{p.description}</p>
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
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
