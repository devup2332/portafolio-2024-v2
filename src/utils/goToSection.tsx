export type Section = "banner" | "experience" | "projects" | "contact";

export enum SectionEnum {
  banner = "banner",
  experience = "experience",
  projects = "projects",
  contact = "contact",
}

const goToSection = (id: Section) => {
  let topToScroll = 0;
  const sectionsIds = Object.values(SectionEnum);
  const headerHeight = document.getElementById("homeheader")?.clientHeight;
  for (const el of sectionsIds) {
    const htmlElement = document.getElementById(el);
    if (!htmlElement) return;
    if (el === id) break;
    topToScroll += htmlElement.clientHeight;
  }
  window.scroll({
    top: topToScroll === 0 ? 0 : topToScroll - headerHeight! - 20,
    behavior: "smooth",
    left: 0,
  });
};

export default goToSection;
