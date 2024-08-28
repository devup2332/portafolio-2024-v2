import { MenuIcon } from "@/components/Icons";
import { Button } from "@/components/ui/button";
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
} from "@/components/ui/dropdown-menu";
import { useTranslation } from "react-i18next";

const links = [
  {
    label: "home.banner.menu.home",
    path: "/",
    sub: false,
  },
  {
    label: "home.banner.menu.experience",
    path: "/",
    sub: false,
  },

  {
    label: "home.banner.menu.projects",
    path: "/",
    sub: false,
  },
  {
    label: "home.banner.menu.contact",
    path: "/",
    sub: false,
  },
  {
    label: "home.banner.menu.languages.label",
    path: "/",
    sub: true,
    children: [
      {
        label: "home.banner.menu.languages.english",
      },
      {
        label: "home.banner.menu.languages.spanish",
      },
    ],
  },
];

const HomeHeader = () => {
  const { t } = useTranslation();
  return (
    <header className="font-bold text-2xl  py-4 sticky top-0 left-0 lg:py-8 bg-primary-bg z-10">
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
                    className="inline-block mx-4 lg:text-base font-normal cursor-pointer"
                  >
                    {t(item.label)}
                  </li>
                )
            )}
          </ul>
        </nav>

        <Button variant="ghost" className="hidden xl:block">
          es
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
                    <DropdownMenuSubTrigger className="lg:text-base">
                      {t(item.label)}
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent>
                        {item.children?.map((child, index) => (
                          <DropdownMenuItem
                            key={index}
                            className="lg:text-base"
                          >
                            {t(child.label)}
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                ) : (
                  <DropdownMenuItem key={index} className="lg:text-base">
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
