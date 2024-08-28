import React from "react";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import en from "@/translations/en/index.json";
import es from "@/translations/es/index.json";

i18n.init({
  fallbackLng: "en",
  debug: true,
  resources: {
    en: {
      translation: en,
    },
    es: {
      translation: es,
    },
  },
});
interface I18ProviderProps {
  children: React.ReactNode;
}
const I18Provider = ({ children }: I18ProviderProps) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default I18Provider;
