import { headerAuthenticated } from "@/constants/header.constants";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

export function HeaderAuthenticated() {
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
                    {headerAuthenticated.map((item, idx) => (
                        <li key={idx}>
                            <a
                                href={item.url}
                                className=" text-gray-800 font-medium 
                  transition-colors duration-200 hover:text-black
                "
                            >
                                {item.nome}
                            </a>
                        </li>
                    ))}

                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                </ul>
            </nav>
        </header>
    );
}
