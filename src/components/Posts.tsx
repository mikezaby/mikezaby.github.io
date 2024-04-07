import { IPostMetadata } from "@/lib/posts";
import Image from "next/image";
import Link from "next/link";

export default function Posts(props: { posts: IPostMetadata[] }) {
  const { posts } = props;

  return (
    <ul>
      {posts.map(({ id, title, date, description, cover }) => (
        <li key={id} className="border-b border-gray-200 py-4">
          {cover && <Image src={cover} alt="cover" />}
          <Link
            href={`/posts/${id}`}
            className="text-xl text-blue-500 hover:text-blue-700"
          >
            {title}
          </Link>
          <div className="text-gray-600">{date}</div>
          <div className="text-gray-600">{description}</div>
          <Link
            href={`/posts/${id}`}
            className="block text-right text-sm text-blue-500 hover:text-blue-700"
          >
            Read more
          </Link>
        </li>
      ))}
    </ul>
  );
}
