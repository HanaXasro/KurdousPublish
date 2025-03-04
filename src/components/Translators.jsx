import React from "react";
import { Link } from "react-router-dom";
import { translatorsList } from "../data/Translators.js";

const Translators = () => {
  return (
    <section
      className={`flex flex-col justify-around items-start px-2 md:px-8 bg-light-primary dark:bg-dark-primary`}
    >
      <div className="flex flex-col justify-start items-center mt-24">
        <div>
          <h1 className="text-light-secondary text-2xl font-semibold md:font-extrabold md:text-3xl dark:text-white">
            وەرگێڕەکان
          </h1>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4  w-full mb-24">
        {translatorsList.map(
          ({ id, TranslatorName, title, TranslatorImage, number }) => (
            <Link
              key={id}
              to={`/TranslatorDescription/${id}`}
              className="group p-2 h-[400px] relative cursor-pointer overflow-hidden flex justify-center rounded-md mt-8 w-full"
            >
              <img
                src={TranslatorImage}
                className="absolute left-0 top-0 w-full h-full object-cover transition duration-200 group-hover:scale-105"
              />
              <div
                className={`w-full absolute left-0 -bottom-full space-y-2 py-2 
                  bg-light-primary text-light-secondary bg-opacity-50 dark:bg-dark-primary dark:text-dark-secondary dark:bg-opacity-50
                  transition-all duration-300 group-hover:bottom-0`}
              >
                <h1 className="font-bold text-lg md:text-xl pt-1 text-center">
                  {TranslatorName}
                </h1>
                <p className=" text-center">{title}</p>
                <p className=" text-center pb-1 font-light ">{number}</p>
              </div>
            </Link>
          )
        )}
      </div>
    </section>
  );
};

export default Translators;
