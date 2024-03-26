import { postsMetadata } from "@/lib/posts";
import Link from "next/link";
import Head from "next/head";

export default async function Posts() {
  const posts = await postsMetadata();

  return (
    <div className="max-w-4xl mx-auto px-4">
      <Head>
        <title>Posts</title>
      </Head>

      <header className="my-12">
        <h1 className="text-4xl font-bold text-center">Posts</h1>
      </header>

      <main>
        <ul>
          {posts.map(({ id, title, date, description }) => (
            <li key={id} className="border-b border-gray-200 py-4">
              <Link
                href={`/posts/${id}`}
                className="text-xl text-blue-500 hover:text-blue-700"
              >
                {title}
              </Link>
              <div className="text-gray-600">{date}</div>
              <div className="text-gray-600">{description}</div>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
