'use client'
import { AnaliseIA } from "@/components/analise-ia";
import { capitalizeFirstWord } from "@/functions/capitalize";
import { formatValue } from "@/functions/formatValor";
import { edital, user } from "@/test/constantes";
import { useParams, useRouter } from "next/navigation";


export default function EditalUniquePage() {
    const params = useParams<{ tag: string; id: string }>();
    const { back } = useRouter()
    const selectedEdital = edital[Number(params.id) - 1];

    const seInscrever = () => {
        console.log('Adicionando documentos...');
        console.log('Enviando via email...');
        console.log('Enviado inscrição via e-mail');
        console.log('Em análise, aguarde até o resultado');
        console.log('Nosso sistema confirmará o resultado automaticamente, porém pode acessar:');
    }

    return (
        <main className="min-h-screen bg-gray-50 text-gray-900 flex flex-col items-center py-12 px-12">
            <section className="w-full max-w-3xl bg-white border border-gray-200 rounded-xl shadow-md p-8 flex flex-col gap-4">
                <h1 className="text-3xl font-semibold border-b border-gray-200 pb-3">
                    {selectedEdital.name}
                </h1>
                <p className="text-gray-700 text-base leading-relaxed">
                    {capitalizeFirstWord(selectedEdital.description.toLowerCase().trim())}
                </p>
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                    <p>
                        <span className="font-medium text-gray-800">Período:</span>{" "}
                        {selectedEdital.inicio} — {selectedEdital.fim}
                    </p>
                </div>
                <p className="text-gray-800 font-medium mt-2">
                    <span className="text-gray-600">Órgão responsável:</span>{" "}
                    {selectedEdital.orgao}
                </p>
                {(selectedEdital.contato || selectedEdital.email_contato || selectedEdital.email_inscricao) && (
                    <section>
                        {selectedEdital.contato && (<p>Contato: {selectedEdital.contato}</p>)}
                        {selectedEdital.email_contato && (<p>Email de contato: {selectedEdital.email_contato}</p>)}
                        {selectedEdital.email_inscricao && (<p>Email de inscrição: {selectedEdital.email_inscricao}</p>)}
                    </section>
                )}
                <section className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Documentos Necessários</h2>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                    </ul>
                    {selectedEdital.documents.map((element, idx) => (
                        <li key={idx}>{element}</li>
                    ))}
                </section>
                <p className="mt-6 text-lg font-semibold text-black">
                    Valor disponível:{" "}
                    <span className="text-gray-800">{formatValue(selectedEdital.valor)}</span>
                </p>
                <AnaliseIA selectedEdital={selectedEdital} user={user} />
                <section className="mt-2 flex flex-col gap-3">
                    <button
                        onClick={back}
                        className="w-full text-center py-2 rounded-md bg-black text-white text-sm font-medium transition-all duration-200 hover:bg-gray-800"
                    >
                        Voltar
                    </button>
                    {selectedEdital.email_inscricao && (
                        <button
                            onClick={seInscrever}
                            className="cursor-pointer 
                            w-full py-2 rounded-md bg-white border border-black text-black text-sm font-medium transition-all duration-200 hover:bg-black hover:text-white"
                        >
                            Inscrever-se
                        </button>
                    )}
                </section>
            </section>
        </main>
    );
}
