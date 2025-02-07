import { Button } from "@/components/UI/button";
import goToSection, { Section } from "@/utils/goToSection";
import { homeheaderLinks } from "@/utils/homeHeaderLinks";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "motion/react";
import MoonIcon from "@/components/Icons/MoonIcon";
import SunIcon from "@/components/Icons/SunIcon";
import { useStore } from "@/store";

type ILanguageProp = "en" | "es";

const HomeHeader = () => {
  const [links, setLinks] = useState(homeheaderLinks);
  const { theme, switchTheme } = useStore((state) => state);
  const { t, i18n } = useTranslation();

  const handleChangeLanguage = (language?: ILanguageProp) => {
    const currentLanguage = i18n.language;
    if (language) {
      i18n.changeLanguage(language);
    } else {
      i18n.changeLanguage(currentLanguage === "en" ? "es" : "en");
    }
  };

  const handleGoToSection = (section?: Section) => {
    if (!section) return;
    goToSection(section);
  };

  const detectScroll = () => {
    let hAcumulated = 0;
    const range = document.documentElement.clientHeight * 0.4;
    const newLinks = homeheaderLinks.map((item, index) => {
      if (!item.id) return item;
      const dimensions = document
        .getElementById(item.id)
        ?.getBoundingClientRect();
      if (!dimensions) return item;
      const visibleRange = {
        start: !index ? 0 : hAcumulated - range,
        end: !index
          ? dimensions.height - range
          : hAcumulated + dimensions.height - range,
      };
      hAcumulated += dimensions.height;

      return { ...item, visibleRange };
    });
    newLinks.pop();
    const scrollTop = window.scrollY;

    const nL = newLinks.map((l) => {
      if (
        l.visibleRange &&
        scrollTop >= l.visibleRange.start &&
        scrollTop <= l.visibleRange.end
      ) {
        return { ...l, active: true };
      } else {
        return { ...l, active: false };
      }
    });
    setLinks(nL);
  };

  useEffect(() => {
    detectScroll();
    window.addEventListener("scroll", detectScroll);
    return () => {
      window.removeEventListener("scroll", detectScroll);
    };
  }, []);
  return (
    <motion.header
      className="font-bold text-2xl fixed w-full top-0 left-0 lg:py-8 z-10 headerGlass bg-primary-bg lg:bg-transparent"
      id="homeheader"
      style={{ animationDelay: "0.5" }}
      initial={{
        translateY: "-200px",
        opacity: 0,
      }}
      animate={{
        translateY: "0px",
        opacity: 1,
      }}
      transition={{
        delay: 0.5,
        duration: 0.8,
      }}
      viewport={{
        once: true,
      }}
    >
      <div className="w-full m-auto max-w-md lg:w-10/12 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl flex justify-between items-center py-4 px-12 rounded-2xl">
        <button onClick={() => goToSection("banner")}>
          <span>{t("home.banner.logo.firstName")} </span>
          <span className="text-primary-color textShadow">
            {t("home.banner.logo.lastName")}
          </span>
        </button>

        <nav className="hidden lg:block">
          <ul>
            {links.map(
              (item, index) =>
                !item.sub && (
                  <li
                    key={index}
                    className={clsx(
                      "inline-block mx-4 lg:text-base font-normal cursor-pointer hover:text-primary-color transition-colors customUnderline",
                      item.active ? "text-primary-color underlineFull" : "",
                    )}
                    onClick={() => handleGoToSection(item.id)}
                  >
                    {t(item.label)}
                  </li>
                ),
            )}
          </ul>
        </nav>

        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="bg-none"
            onClick={() => handleChangeLanguage()}
          >
            {i18n.language === "en" ? "EN" : "ES"}
          </Button>
          <Button
            variant="ghost"
            onClick={() => switchTheme(theme === "dark" ? "light" : "dark")}
          >
            {theme === "dark" ? <MoonIcon className="w-5 h-5" /> : <SunIcon />}
          </Button>
        </div>
      </div>
    </motion.header>
  );
};

export default HomeHeader;
