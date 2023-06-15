import skills from "@/data/skills.json";

export const Skillset = () => {
  return (
    <div className="px-4 space-y-2 lg:space-y-3">
      <h1 className="font-bold text-2xl md:text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-100">
        Skillset
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="rounded-lg border border-neutral-400 dark:border-neutral-600 px-4 py-3 md:px-5 md:py-4"
          >
            <p className="font-semibold text-lg text-neutral-800 dark:text-neutral-200">
              {skill.category}
            </p>
            <div className="grid grid-cols-2 mt-1 gap-1">
              {skill.skills.map((skill, index) => (
                <p
                  key={index}
                  className="text-neutral-700 dark:text-neutral-400"
                >
                  {skill}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
