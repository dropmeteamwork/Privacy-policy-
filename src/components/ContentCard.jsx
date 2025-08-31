import React, { useState } from "react";
import translations from "../locales/translations.json";
import { motion, AnimatePresence } from "framer-motion";

export default function ContentCard({ lang }) {
  const content = translations[lang].privacy_policy;

  return (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={lang}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
      <div
        dir={lang == "en" ? "ltr" : "rtl"}
        className="rounded-2xl bg-secondary-color p-6 mt-4 mb-4 md:mt-6 md:mb-6 text-justify"
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
        <p className="text-text-color mt-8 mb-10 text-justify md:text-lg">
          {content.intro_part_1}
          <span className="text-primary-color font-bold">
            {content.intro_highlight}
          </span>
          {content.intro_part_2}
        </p>
        {/* The information we collect */}
        <div className="mb-10">
          <h3 className="font-semibold text-xl md:text-2xl mb-2 text-primary-color">
            {content.information_we_collect_heading}
          </h3>
          <p className="text-text-color">
            {content.information_we_collect_paragraph_1}
          </p>
          <ul
            className={`list-disc list-outside mt-4 space-y-2 marker:text-primary-color md:text-lg text-justify text-text-color ${
              lang == "en" ? "ml-4" : "mr-4"
            }`}
          >
            <li>
              <span className="font-semibold">
                {content.information_we_collect_personal_info_1}
              </span>
              {content.information_we_collect_personal_info_2}
            </li>
            <li>
              <span className="font-semibold">
                {content.information_we_collect_usage_data_1}
              </span>
              {content.information_we_collect_usage_data_2}
            </li>
          </ul>
        </div>
        {/* How we use the information */}
        <div className="mb-10">
          <h3 className="font-semibold text-xl md:text-2xl mb-2 text-primary-color">
            {content.how_we_use_info_heading}
          </h3>
          <ul
            className={`list-disc list-outside mt-4 space-y-2 marker:text-primary-color md:text-lg text-justify text-text-color ${
              lang == "en" ? "ml-4" : "mr-4"
            }`}
          >
            <li>
              {content.how_we_use_info_item_1_1}
              <span className="text-primary-color font-bold">
                {content.how_we_use_info_item_1_2}
              </span>
              {content.how_we_use_info_item_1_3}
            </li>

            <li>{content.how_we_use_info_item_2}</li>
            <li>{content.how_we_use_info_item_3}</li>
          </ul>
        </div>
        {/* Your control over your data */}
        <div className="">
          <h3 className="font-semibold text-xl md:text-2xl mb-2 text-primary-color">
            {content.your_control_heading}
          </h3>
          <p className="text-text-color md:text-lg">
            {content.your_control_paragraph_1}
          </p>
          <div className="mt-4 px-4 py-4 rounded-lg bg-white border-b-3 border-orange-500">
            <a
              href="mailto:hello@dropmeeg.com"
              className="font-semibold text-lg text-primary-color hover:text-hover-color transition"
            >
              hello@dropmeeg.com
            </a>
          </div>
        </div>
      </div>
      </motion.div>
      </AnimatePresence>

    </>
  );
}
