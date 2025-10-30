import { header } from "@/constants/header.constats";

export function Header() {
  return (
    <header className="flex justify-between items-center p-5 bg-amber-300 rounded-b-2xl shadow-2xl">
      <button className="hidden"></button>
      <h2 className="text-[25px]">Logo</h2>
      <nav>
        <ul className="flex gap-3 items-center">
          {header.map((item, idx) => (
            <li key={idx}>
              <a className="text-[20px]" href={item.url}>
                {item.nome}
              </a>
            </li>
          ))}
          <li>
            <button className="border-2 rounded-lg p-1 text-[18px]">
              Loguin
            </button>
          </li>
          <li>
            <button className="border-2 rounded-lg p-1 text-[18px]">
              Registrar
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
