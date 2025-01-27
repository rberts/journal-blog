interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  return (
    <main>
      <h1>Post: {params.slug}</h1>
      <p>Conteúdo do post será carregado aqui...</p>
    </main>
  );
}