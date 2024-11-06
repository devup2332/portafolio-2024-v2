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
import { useTranslation } from "react-i18next";

type ILanguageProp = "en" | "es";

const HomeHeader = () => {
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
            {homeheaderLinks.map(
              (item, index) =>
                !item.sub && (
                  <li
                    key={index}
                    className="inline-block mx-4 lg:text-base font-normal cursor-pointer hover:text-primary-color transition-colors customUnderline"
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
              {homeheaderLinks.map((item, index) => {
                return item.sub ? (
                  <DropdownMenuSub key={index}>
                    <DropdownMenuSubTrigger className="lg:text-base">
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
                    className="lg:text-base"
                    onClick={() => goToSection(item.id)}
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
