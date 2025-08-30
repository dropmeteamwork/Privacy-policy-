import React, { useState } from "react";
import translations from "../locales/translations.json";

export default function ContentCard() {
  const [lang, setLang] = useState("en");
  const content = translations[lang].privacy_policy;

  return (
    <>
      <div
        dir={lang == "en" ? "ltr" : "rtl"}
        className="rounded-2xl bg-secondary-color h-200 p-6 mt-4 mb-4 md:mt-6 md:mb-6"
      >
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl capitalize text-primary-color mb-1 md:mb-2 lg:mb-3">
            {content.title}
          </h1>
          <h2 className="text-gray-500 md:text-lg lg:text-xl">
            {content.subtitle}
          </h2>
        </div>
        
      </div>
    </>
  );
}
