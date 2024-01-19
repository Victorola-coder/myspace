interface post {
  title: string;

  slug: string;
  content: string;
}

interface props {
  params: { slug: string };
}

export default function Blog({ params }: any) {
  return <div></div>;
}
