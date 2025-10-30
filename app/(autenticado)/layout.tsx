import { Footer } from "@/components/footer";
import { HeaderAuthenticated } from "@/components/header-autenticado";

export default function AuthenticatedLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <HeaderAuthenticated />
            {children}
            <Footer />
        </>
    );
}
