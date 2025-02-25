import { Section } from "@/types/generalTypes";
import { homeheaderLinks } from "@/utils/links/HomeHeaderLinks";
import { goToSection } from "@/utils/methods";
import clsx from "clsx";
import { useEffect, useState } from "react";

const BottomNav = () => {
  const [links, setLinks] = useState(homeheaderLinks);

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
    <div className="text-white fixed bottom-5 py-4 px-6 w-11/12 rounded-md flex justify-between max-w-md lg:hidden bottomNavGlassEffect">
      {links.map((l, index) => {
        const { Icon, active, id } = l;
        if (!Icon) return;
        return (
          <div
            className="cursor-pointer"
            key={index}
            onClick={() => handleGoToSection(id)}
          >
            <Icon
              className={clsx(
                "w-6 h-6",
                active ? "text-primary-color" : "text-text-color-1",
              )}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BottomNav;
