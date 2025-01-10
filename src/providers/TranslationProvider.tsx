import React from "react";
import i18n from "i18next";
import { I18nextProvider } from "react-i18next";
import en from "@/translations/en/index.json";
import es from "@/translations/es/index.json";

i18n.init({
  fallbackLng: "en",
  debug: process.env.NODE_ENV === "development",
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
const TranslationProvider = ({ children }: I18ProviderProps) => {
  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};

export default TranslationProvider;
