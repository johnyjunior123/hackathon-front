'use client'
import users from '@/test-database/users.json';
import { redirect } from 'next/navigation';

export default function LoginPage() {

    const autenticar = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get("email");
        const password = form.get("password");
        const user = users.find(user => user.email === email && user.password === password);
        if (!user) {
            return alert("Email ou senha inválido");
        }

        console.log(password)
        console.log(email)
        console.log(user)
        console.log(users)
        localStorage.setItem('user', JSON.stringify(user))
        return redirect('/auth')
    };

    return (
        <main>
            <section className="min-h-screen flex items-center justify-center bg-gray-50 text-gray-900 px-4">
                <div className="w-full max-w-sm bg-white border border-gray-200 rounded-xl shadow-md p-8 flex flex-col gap-6">
                    <h1 className="text-2xl font-semibold text-center border-b border-gray-200 pb-4">
                        Entrar
                    </h1>
                    <form onSubmit={(e) => autenticar(e)} className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">
                                E-mail
                            </label>
                            <input
                                id="email"
                                type="email"
                                name='email'
                                placeholder="seuemail@exemplo.com"
                                className="
                w-full px-4 py-2 rounded-md border border-gray-300 
                text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                transition-all duration-200
              "
                                required
                            />
                        </div>

                        <div className="flex flex-col gap-2">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700">
                                Senha
                            </label>
                            <input
                                id="password"
                                type="password"
                                name='password'
                                placeholder="••••••••"
                                className="
                w-full px-4 py-2 rounded-md border border-gray-300 
                text-gray-900 placeholder-gray-400 
                focus:outline-none focus:ring-2 focus:ring-black focus:border-black
                transition-all duration-200
              "
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="
              w-full py-2 mt-2 rounded-md 
              bg-black text-white text-sm font-medium 
              transition-all duration-200 hover:bg-gray-800
            "
                        >
                            Entrar
                        </button>
                    </form>

                    <p className="text-center text-sm text-gray-600 mt-4">
                        Não tem uma conta?{" "}
                        <a
                            href="/registrar"
                            className="text-black font-medium hover:underline"
                        >
                            Registrar
                        </a>
                    </p>
                </div>
            </section>
        </main>
    )
}