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
        {/* The heading of the content */}
        <div className="text-center">
          <h1 className="font-bold text-3xl md:text-4xl lg:text-5xl capitalize text-primary-color mb-1 md:mb-2 lg:mb-3">
            {content.title}
          </h1>
          <h2 className="text-gray-500 md:text-lg lg:text-xl">
            {content.subtitle}
          </h2>
        </div>

        {/* The introduction */}
        <p className="text-text-color mt-8 mb-8 text-justify md:text-lg">
          {content.intro_part_1}
          <span className="text-primary-color font-bold">
            {content.intro_highlight}
          </span>
          {content.intro_part_2}
        </p>


      </div>
    </>
  );
}
