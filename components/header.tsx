import { header } from "@/constants/header.constants";

export function Header() {
  return (
    <header
      className="
        flex justify-between items-center 
        px-8 py-4 bg-white text-black 
        border-b border-gray-200 shadow-sm
      "
    >
      <h2 className="text-2xl font-semibold tracking-tight">Logo</h2>
      <nav>
        <ul className="flex gap-6 items-center">
          {header.map((item, idx) => (
            <li key={idx}>
              <a
                href={item.url}
                className="
                  text-[18px] text-gray-800 font-medium 
                  transition-colors duration-200 hover:text-black
                "
              >
                {item.nome}
              </a>
            </li>
          ))}

          <li>
            <a
              href="/login"
              className="
                px-3 py-1 border border-gray-300 rounded-md 
                text-[16px] text-gray-800 font-medium 
                transition-all duration-200 hover:bg-black hover:text-white hover:border-black
              "
            >
              Login
            </a>
          </li>
          <li>
            <a
              href="/registrar"
              className="
                px-3 py-1 border border-gray-800 rounded-md 
                text-[16px] font-semibold text-white bg-black
                transition-all duration-200 hover:bg-gray-800
              "
            >
              Registrar
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
