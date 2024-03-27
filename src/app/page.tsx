import { postsMetadata } from "@/lib/posts";
import { Posts } from "@/components";

export default async function Home() {
  const posts = await postsMetadata();

  return <Posts posts={posts} />;
}
