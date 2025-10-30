import { cardsprojetos } from "@/constants/cards.projetos.constats";

export function CardsProjetos() {
  return cardsprojetos.map((card, idx) => (
    <section
      className="flex flex-col justify-center items-center gap-2 text-center w-60 h-90 p-3 m-2 rounded-lg shadow-2xl bg-amber-700"
      key={idx}
    >
      <div className="flex justify-between">
        <img className="w-8" src={card.icone} alt="icone" />
        <p>{card.recomendacoes}</p>
      </div>
      <h2>{card.nomeProjeto}</h2>
      <figure>
        <img className="w-50 rounded-lg" src={card.fotoProdutor} alt="foto produtor" />
        <figcaption>{card.nomeProdutor}</figcaption>
      </figure>
      <a className="bg-amber-100 p-1 rounded-lg hover:bg-amber-400" href={card.redirecionar}>Acessar</a>
    </section>
  ));
}
