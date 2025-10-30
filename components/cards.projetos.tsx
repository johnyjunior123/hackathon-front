'use client'
import { MdRecommend } from "react-icons/md";
import { FaPerson } from "react-icons/fa6";
import { Project } from "@/types/Project";
import { usePathname } from "next/navigation";


type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const path = usePathname()

  return (
    <section
      className="
        flex flex-col justify-between items-start 
        w-64 h-auto p-5 m-3 rounded-xl shadow-md 
        bg-white text-gray-900 border border-gray-200 
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl
      "
    >
      <div className="w-full flex justify-center mb-3">
        <img
          src={project.icon}
          alt={project.name}
          className="rounded-md object-contain"
        />
      </div>

      <div className="flex flex-col gap-2 text-left">
        <h1 className="text-lg font-semibold">{project.name}</h1>
        <p className="text-sm text-gray-700 line-clamp-3">
          {project.description}
        </p>
        <p className="text-sm text-gray-600 mt-2">
          <span className="font-medium text-gray-800">Autor:</span> {project.user.name}
        </p>
      </div>

      <section className="flex justify-between items-center w-full mt-4">
        <a
          href={`${path}/${project.id}`}
          className="
              px-3 py-1 rounded-md bg-black text-white text-sm font-medium 
              transition-all duration-200 hover:bg-gray-800
            "
        >
          Acessar
        </a>

        <div className="flex items-center gap-3 text-gray-700">
          <button className="cursor-pointer flex items-center gap-1">
            <MdRecommend className="text-lg text-gray-800" />
            <p className="text-sm">{project.recommendations}</p>
          </button>
          <button className="cursor-pointer flex items-center gap-1">
            <FaPerson className="text-lg text-gray-800" />
            <p className="text-sm">{project.volunteers}</p>
          </button>
        </div>
      </section>
    </section>
  );
}
