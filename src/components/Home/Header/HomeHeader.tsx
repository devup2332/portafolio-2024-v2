import { MenuIcon } from "@/components/Icons";
import { Button } from "@/components/UI/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/UI/dropdown-menu";
import goToSection, { Section } from "@/utils/goToSection";
import { homeheaderLinks } from "@/utils/homeHeaderLinks";
import clsx from "clsx";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

type ILanguageProp = "en" | "es";

const HomeHeader = () => {
  const [links, setLinks] = useState(homeheaderLinks);
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
    <header
      className="fadeInAnimation opacity-0 font-bold text-2xl py-4 fixed w-full top-0 left-0 lg:py-8 bg-primary-bg z-10"
      id="homeheader"
      style={{ animationDelay: "0.5" }}
    >
      <div className="w-10/12 m-auto max-w-md lg:max-w-4xl xl:max-w-6xl 2xl:max-w-8xl flex justify-between items-center">
        <button>
          <span>{t("home.banner.logo.firstName")} </span>
          <span className="text-primary-color textShadow">
            {t("home.banner.logo.lastName")}
          </span>
        </button>

        <nav className="hidden xl:block">
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

        <Button
          variant="ghost"
          className="hidden xl:block"
          onClick={() => handleChangeLanguage()}
        >
          {i18n.language === "en" ? "ES" : "EN"}
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="outline-none xl:hidden">
            <MenuIcon />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              {links.map((item, index) => {
                return item.sub ? (
                  <DropdownMenuSub key={index}>
                    <DropdownMenuSubTrigger
                      className={clsx(
                        "lg:text-base",
                        item.active ? "text-primary-color" : "",
                      )}
                    >
                      {t(item.label)}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {item.children?.map((child, index) => (
                          <DropdownMenuItem
                            key={index}
                            className="lg:text-base"
                            onClick={() =>
                              handleChangeLanguage(child.value as ILanguageProp)
                            }
                          >
                            {t(child.label)}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem
                    key={index}
                    className={clsx(
                      "lg:text-base",
                      item.active ? "text-primary-color" : "",
                    )}
                    onClick={() => goToSection(item.id!)}
                  >
                    {t(item.label)}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
};

export default HomeHeader;
