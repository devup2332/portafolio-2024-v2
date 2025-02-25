import { IContactSchema } from "@/schemas/contactSchema";
import { fetchAPI } from "./fetch";
import { Section } from "@/types/generalTypes";

export const sendMail = async (message: IContactSchema) => {
  return await fetchAPI("/api/contact/send-email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(message),
  });
};

export const goToSection = (id: Section) => {
  let topToScroll = 0;
  const sectionsIds: Section[] = [
    "banner",
    "experience",
    "projects",
    "contact",
  ];
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

export const sleep = (ms: number) =>
  new Promise((resolve) => setTimeout(resolve, ms));
