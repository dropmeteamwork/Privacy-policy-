import React from "react";
import dropmeLogo from "../assets/images/dropme-logo.png";

export default function NavBar({TranslateFunc}) {
  return (
    <div className="navbar bg-base-100 shadow-sm px-0">
      <div className="w-full grid grid-cols-12 px-4 md:px-0 ">
      <div className="col-span-12 md:col-start-2 md:col-span-10 lg:col-start-3 lg:col-span-8 flex justify-between items-center">
      <div className="flex-1">
            <img alt="Drom me logo" src={dropmeLogo} className="w-24 md:w-32" />
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <button 
                className="btn bg-primary-color text-white border-0 rounded-3xl"
                onClick={TranslateFunc}
                >
                  Arabic
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
