'use client'
import { useState } from "react";

type TipoPessoa = "CNPJ" | "PF";

export default function RegisterPage() {
    const [tipoPessoa, setTipoPessoa] = useState<TipoPessoa>("CNPJ");
    const [etapa, setEtapa] = useState<number>(1);

    const nextStep = () => setEtapa(prev => prev + 1);
    const prevStep = () => setEtapa(prev => prev - 1);

    const isLastStep = tipoPessoa === "CNPJ" ? etapa === 3 : etapa === 2;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Registrando usuário...");
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 px-4">
            <div className="w-full max-w-lg bg-white border border-gray-200 rounded-xl shadow-md p-8 flex flex-col gap-6">
                <div className="flex justify-center gap-4 mb-4">
                    <button
                        onClick={() => { setTipoPessoa("CNPJ"); setEtapa(1); }}
                        className={`
              px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200
              ${tipoPessoa === "CNPJ"
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
            `}
                    >
                        Pessoa Jurídica (CNPJ)
                    </button>
                    <button
                        onClick={() => { setTipoPessoa("PF"); setEtapa(1); }}
                        className={`
              px-4 py-2 text-sm font-medium rounded-md border transition-all duration-200
              ${tipoPessoa === "PF"
                                ? "bg-black text-white border-black"
                                : "bg-white text-gray-700 border-gray-300 hover:bg-gray-100"}
            `}
                    >
                        Pessoa Física (PF)
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {tipoPessoa === "CNPJ" && etapa === 1 && (
                        <>
                            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2">
                                Dados da Empresa
                            </h2>
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium">CNPJ</label>
                                <input
                                    type="text"
                                    placeholder="00.000.000/0001-00"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none"
                                    required
                                />
                                <label className="text-sm font-medium">Razão Social</label>
                                <input
                                    type="text"
                                    placeholder="Nome da Empresa LTDA"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none"
                                    required
                                />
                            </div>
                        </>
                    )}

                    {((tipoPessoa === "CNPJ" && etapa === 2) || (tipoPessoa === "PF" && etapa === 1)) && (
                        <>
                            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2">
                                Dados Pessoais
                            </h2>
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium">Nome Completo</label>
                                <input
                                    type="text"
                                    placeholder="Seu nome completo"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none"
                                    required
                                />

                                <label className="text-sm font-medium">Data de Nascimento</label>
                                <input
                                    type="date"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none"
                                    required
                                />

                                <label className="text-sm font-medium">Endereço</label>
                                <div className="grid grid-cols-2 gap-3">
                                    <input type="text" placeholder="Rua" className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none" required />
                                    <input type="text" placeholder="Bairro" className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none" required />
                                    <input type="text" placeholder="Número" className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none" required />
                                    <input type="text" placeholder="Cidade" className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none" required />
                                    <input type="text" placeholder="Estado" className="col-span-2 border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none" required />
                                </div>
                            </div>
                        </>
                    )}

                    {((tipoPessoa === "CNPJ" && etapa === 3) || (tipoPessoa === "PF" && etapa === 2)) && (
                        <>
                            <h2 className="text-lg font-semibold border-b border-gray-200 pb-2">
                                Segurança da Conta
                            </h2>
                            <div className="flex flex-col gap-3">
                                <label className="text-sm font-medium">Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none"
                                    required
                                />
                                <label className="text-sm font-medium">Confirmar Senha</label>
                                <input
                                    type="password"
                                    placeholder="••••••••"
                                    className="border border-gray-300 rounded-md px-4 py-2 focus:ring-2 focus:ring-black focus:border-black outline-none"
                                    required
                                />
                            </div>
                        </>
                    )}

                    <div className="flex justify-between mt-4">
                        {etapa > 1 && (
                            <button
                                type="button"
                                onClick={prevStep}
                                className="px-4 py-2 rounded-md border border-gray-400 text-gray-800 text-sm hover:bg-gray-100 transition-all duration-200"
                            >
                                Voltar
                            </button>
                        )}
                        {!isLastStep ? (
                            <button
                                type="button"
                                onClick={nextStep}
                                className="ml-auto px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all duration-200"
                            >
                                Próximo
                            </button>
                        ) : (
                            <button
                                type="submit"
                                className="ml-auto px-4 py-2 rounded-md bg-black text-white text-sm font-medium hover:bg-gray-800 transition-all duration-200"
                            >
                                Registrar
                            </button>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
}