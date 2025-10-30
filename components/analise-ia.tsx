import { Edital } from "@/types/Editais";
import { User } from "@/types/User";
import { useEffect, useState } from "react";

type AnaliseIAProps = {
    selectedEdital: Edital
    user: User
}

interface UserStatus {
    documentosFaltando: string[];
    apto: boolean;
    recomendacoes: string[];
}

export function AnaliseIA({ selectedEdital, user }: AnaliseIAProps) {
    const [loading, setLoading] = useState<boolean>(true)
    const [status, setStatus] = useState<UserStatus | null>(null)

    useEffect(() => {
        const timeout = setTimeout(() => {
            const faltando = selectedEdital.documents.filter(
                (doc) => !user.haveDocuments?.includes(doc)
            );

            setStatus({
                documentosFaltando: faltando,
                apto: faltando.length === 0,
                recomendacoes: faltando.length > 0 ? ["Envie todos os documentos faltantes para se tornar apto."] : [],
            });
            setLoading(false);
        }, 1200);

        return () => clearTimeout(timeout);
    }, [selectedEdital]);

    return (
        <section className="mt-6 p-4 border rounded-lg bg-gray-50">
            <h2 className="text-lg font-semibold mb-2">🤖 Análise da IA</h2>

            {loading ? (
                <p className="text-gray-600 animate-pulse">Analisando seus documentos...</p>
            ) : status ? (
                status.apto ? (
                    <div className="p-4 bg-green-100 text-green-800 rounded-md">
                        ✅ Você está apto a se inscrever!
                    </div>
                ) : (
                    <div className="p-4 bg-yellow-100 text-yellow-800 rounded-md space-y-2">
                        <p>⚠️ Você ainda não está apto.</p>
                        {status.documentosFaltando.length > 0 && (
                            <ul className="list-disc list-inside">
                                {status.documentosFaltando.map((doc, idx) => (
                                    <li key={idx}>{doc}</li>
                                ))}
                            </ul>
                        )}
                        {status.recomendacoes.map((rec, idx) => (
                            <p key={idx} className="text-sm">{rec}</p>
                        ))}
                        <p><a className="text-blue-600" href="/perfil">⚠️ Clique aqui para anexar os documentos restantes</a></p>
                    </div>
                )
            ) : null}
        </section>
    )
}