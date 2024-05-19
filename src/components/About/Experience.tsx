import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import experiences from "@/data/experiences.json";

export const Experience = () => {
  return (
    <div className="px-4 space-y-4 sm:space-y-5">
      <div className="flex items-center justify-between">
        <span className="flex items-center gap-2 font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-100">
          <HiOutlineBuildingOffice2 />
          <p>Experience</p>
        </span>
        <div className="grow border-t mx-4 border-neutral-800 dark:border-neutral-100"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-5">
        {experiences.map((experience, index) => (
          <div
            key={index}
            className="rounded-lg px-4 py-3 md:px-5 md:py-4 border dark:border-0 border-neutral-200 dark:bg-zinc-800 text-lg space-y-0.5"
          >
            <p className="font-bold text-neutral-800 dark:text-neutral-100">
              {experience.company}
            </p>
            <p className="text-neutral-800 dark:text-neutral-200">
              {experience.department}
            </p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400">
              {experience.year}
            </p>
            <p className="text-sm text-justify text-neutral-800 dark:text-neutral-200">
              {experience.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
