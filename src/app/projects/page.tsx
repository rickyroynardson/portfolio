import { Layout } from "@/components/Layout/Layout";
import projects from "@/data/projects.json";
import Image from "next/image";
import Link from "next/link";
import { MdOpenInNew } from "react-icons/md";

export default function ProjectsPage() {
  return (
    <Layout className="py-10">
      <div className="px-4 space-y-5">
        <div>
          <h2 className="font-bold text-3xl md:text-4xl lg:text-5xl text-neutral-800 dark:text-neutral-100">
            Latest projects
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mt-1 lg:mt-2 lg:text-lg">
            Some code and bugs I&lsquo;ve made trying to put my dent in the
            universe.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg border border-neutral-400 dark:border-neutral-600 p-2 space-y-4"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt="sample image"
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full h-full"
                  priority
                />
              </div>
              <div className="space-y-2">
                <p className="font-bold text-3xl text-neutral-800 dark:text-neutral-100">
                  {project.name}
                </p>
                <ul className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool, index) => (
                    <li
                      key={index}
                      className="text-xs text-neutral-700 dark:text-neutral-300 font-semibold px-1.5 py-0.5 rounded-lg bg-neutral-200 dark:bg-neutral-700"
                    >
                      {tool}
                    </li>
                  ))}
                </ul>
                <p className="text-justify text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex items-center justify-end gap-3">
                  {project.github !== "-" && (
                    <Link href={project.github}>
                      <span className="flex items-center gap-1 text-sm text-neutral-700 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition duration-300">
                        <p>GitHub</p>
                        <MdOpenInNew />
                      </span>
                    </Link>
                  )}
                  {project.demo !== "-" && (
                    <Link href="google.com">
                      <span className="flex items-center gap-1 text-sm text-neutral-700 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 font-semibold transition duration-300">
                        <p>Demo</p>
                        <MdOpenInNew />
                      </span>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}
