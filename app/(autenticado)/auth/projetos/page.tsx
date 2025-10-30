'use client'

import { useEffect, useState } from "react";
import { ProjectCard } from "@/components/cards.projetos";
import projects from "@/test-database/edital.json";
import { Project } from "@/types/Project";
import { FaPlus } from "react-icons/fa";
import { User } from "@/types/User";

export default function Projetos() {
  const [activeTab, setActiveTab] = useState<"gerais" | "meus">("gerais");
  const [search, setSearch] = useState<string>("");
  const [user, setUser] = useState<User>()
  const userProjects: Project[] = [];
  const allProjects: Project[] = [...projects];

  const filteredProjects =
    activeTab === "gerais"
      ? allProjects.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      )
      : userProjects.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

  useEffect(() => {
    const data = localStorage.getItem('user')
    if (data) {
      const user = JSON.parse(data)
      console.log(user)
      setUser(user)
      projects.filter(project => project.user.id == user.id)

    }
  }, [])


  return (
    <main className="min-h-screen bg-gray-50 text-gray-900 p-8 flex flex-col items-center">
      <section className="flex gap-4 mb-6">
        <button
          onClick={() => setActiveTab("gerais")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === "gerais"
            ? "bg-black text-white"
            : "bg-white border border-gray-300 text-gray-800"
            }`}
        >
          Projetos Gerais
        </button>
        <button
          onClick={() => setActiveTab("meus")}
          className={`px-4 py-2 rounded-lg font-medium transition-all ${activeTab === "meus"
            ? "bg-black text-white"
            : "bg-white border border-gray-300 text-gray-800"
            }`}
        >
          Meus Projetos
        </button>
      </section>

      <section className="w-full max-w-3xl mb-6 flex items-center gap-3">
        <input
          type="text"
          placeholder="Pesquisar pelo nome do projeto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
        />
        {activeTab === "meus" && (
          <button
            className="p-2 bg-black text-white rounded-lg flex items-center justify-center text-lg hover:bg-gray-800 transition-all"
            onClick={() => alert("Adicionar novo projeto")}
          >
            <FaPlus />
          </button>
        )}
      </section>
      <section className="flex flex-wrap justify-center gap-4 w-full">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((proj, idx) => (
            <ProjectCard key={idx} project={proj} />
          ))
        ) : (
          <p className="text-gray-500">Nenhum projeto encontrado.</p>
        )}
      </section>
    </main>
  );
}
