import { cards } from "@/constants/cards.editais.constats";

export function CardsEditais() {
  return cards.map((card, idx) => (
    <section
      className="flex flex-col justify-center items-center gap-2 text-center w-60 h-90 p-3 m-2 rounded-lg shadow-2xl bg-amber-700"
      key={idx}
    >
      <h2>{card.nomeOrgao}</h2>
      <p>{card.inicio.toISOString()}</p>
      <p>a</p>
      <p>{card.fim.toISOString()}</p>
      <p>{card.descricao}</p>
      <a className="bg-amber-100 p-1 rounded-lg hover:bg-amber-400" href={card.redirecionar}>Acessar</a>
    </section>
  ));
}
