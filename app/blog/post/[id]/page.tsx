import Link from "next/link";

type Params = Promise<{ id: string }>;

export default async function Post({ params }: { params: Params }) {
  const id = (await params).id;
  return (
    <div>
      <h3>Post #{id}</h3>
      <p>Lorem ipsum</p>
      <Link href="/blog">Back to blog</Link>
    </div>
  );
}
