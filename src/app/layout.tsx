import "./globals.css";

export const metadata = {
  title: "Meu Blog",
  description: "Um blog incrível sobre diversos assuntos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-gray-100 text-gray-900">
        <header className="p-5 bg-blue-600 text-white shadow-md">
          <nav className="container mx-auto flex justify-between">
            <a href="/" className="font-bold text-xl">Meu Blog</a>
            <div className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/blog" className="hover:underline">Blog</a>
              <a href="/about" className="hover:underline">Sobre</a>
              <a href="/contact" className="hover:underline">Contato</a>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-5">
          {children}
        </main>

        <footer className="text-center p-5 bg-gray-200 mt-5">
          <p>&copy; {new Date().getFullYear()} Meu Blog. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
