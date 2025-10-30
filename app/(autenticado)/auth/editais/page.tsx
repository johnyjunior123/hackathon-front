'use client'

import { CardEdital } from "@/components/cards.editais";
import { checkUserProfile } from "@/functions/check-user.profile";
import { edital } from "@/test/constantes";
import { Edital } from "@/types/Editais";
import { User } from "@/types/User";
import { useEffect, useState } from "react";

export default function EditalPage() {
    const [aba, setAba] = useState<number>(0);
    const [editais, setEditais] = useState<Edital[]>(edital);
    const [user, setUser] = useState<User>()

    const recomendadosFilter = () => {
        if (user) {
            setAba(1);
            setEditais(editais.filter((edital) => checkUserProfile(user, edital)));
        }
    };

    useEffect(() => {
        const data = localStorage.getItem('user')
        if (data && data.length > 0) {
            setUser(JSON.parse(data))
        }
    }, [])

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center py-10 px-4">
            {user && (
                <>
                    <section className="flex gap-4 mb-8">
                        <button
                            onClick={() => {
                                setAba(0);
                                setEditais(edital);
                            }}
                            className={`
            px-5 py-2 rounded-md text-sm font-medium border transition-all duration-200
            ${aba === 0
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                                }
          `}
                        >
                            Editais Gerais
                        </button>

                        <button
                            onClick={recomendadosFilter}
                            className={`
            px-5 py-2 rounded-md text-sm font-medium border transition-all duration-200
            ${aba === 1
                                    ? "bg-black text-white border-black"
                                    : "bg-white text-gray-800 border-gray-300 hover:bg-gray-100"
                                }
          `}
                        >
                            Editais Recomendados
                        </button>
                    </section>

                    <section
                        className="
          flex flex-wrap justify-center gap-6 
          max-w-6xl
        "
                    >
                        {editais.map((element, key) => (
                            <CardEdital key={key} edital={element} isRecommended={checkUserProfile(user, element)} />
                        ))}
                    </section>
                </>
            )}
        </main>
    );
}
