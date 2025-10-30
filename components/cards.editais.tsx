"use client";
import { formatValue } from "@/functions/formatValor";
import { Edital } from "@/types/Editais";
import { FaRobot } from "react-icons/fa";

type CardsEditaisProps = {
  edital: Edital;
  isRecommended?: boolean;
  isNotFocus?: boolean
};

export function CardEdital({ edital, isRecommended, isNotFocus }: CardsEditaisProps) {
  return (
    <section
      className="
        flex flex-col justify-between items-start 
        w-64 p-5 m-3 rounded-xl shadow-md 
        bg-white text-gray-900 border border-gray-200 
        transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl
      "
    >
      <div className="w-full">
        <div className="flex flex-col justify-between items-start mb-2">
          <h1 className="text-lg font-semibold">{edital.name}</h1>

          {isRecommended ? (
            <div
              className=" mt-1 mb-1
                flex items-center gap-1 px-2 py-1 rounded-md 
                bg-blue-100 text-blue-700 text-[8px] font-medium
              "
              title="Recomendado pela IA"
            >
              <FaRobot className="text-blue-600" />
              <span>Recomendado</span>
            </div>
          ) : (
            <div
              className=" mt-1 mb-1
                flex items-center gap-1 px-2 py-1 rounded-md 
                bg-blue-100 text-red-700 text-[8px] font-medium
              "
              title="Não aplicável"
            >
              <FaRobot className="text-red-600" />
              <span>Não Aplicável</span>
            </div>
          )}
        </div>

        <div className="text-sm text-gray-600 mb-2">
          <p>
            {edital.inicio} <span className="mx-1">—</span> {edital.fim}
          </p>
        </div>
        <p className="text-sm text-gray-700 mb-2">{edital.description}</p>
        <p className="text-sm text-gray-700 mb-2">{edital.orgao}</p>
        <p className="text-sm font-medium text-black mb-6">
          Valor: <span className="text-gray-800">{formatValue(edital.valor)}</span>
        </p>
      </div>

      <a
        href={`editais/${edital.id}`}
        className="
          w-full text-center py-2 rounded-md 
          bg-black text-white text-sm font-medium 
          transition-colors duration-300 hover:bg-gray-800
        "
      >
        Acessar
      </a>
    </section>
  );
}
