export const metadata = {
  title: "Meu Blog",
  description: "Um blog incrível sobre diversos assuntos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <header style={{ padding: "20px", borderBottom: "1px solid #ddd" }}>
          <nav>
            <a href="/" style={{ marginRight: "15px" }}>Home</a>
            <a href="/blog" style={{ marginRight: "15px" }}>Blog</a>
            <a href="/about" style={{ marginRight: "15px" }}>Sobre</a>
            <a href="/contact">Contato</a>
          </nav>
        </header>

        <main style={{ padding: "20px" }}>
          {children}
        </main>

        <footer style={{ marginTop: "20px", padding: "20px", borderTop: "1px solid #ddd" }}>
          <p>&copy; {new Date().getFullYear()} Meu Blog. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
