import { IPostMetadata } from "@/lib/posts";
import Link from "next/link";

export default function Posts(props: { posts: IPostMetadata[] }) {
  const { posts } = props;

  return (
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
  );
}
