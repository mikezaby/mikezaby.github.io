import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "src/app/posts");

export interface IPostMetadata {
  id: string;
  title: string;
  date: string;
  description: string;
}

const BLACKLIST_FILES = ["layout.tsx", "page.tsx"];

export async function postsMetadata(): Promise<IPostMetadata[]> {
  const fileNames = fs.readdirSync(postsDirectory).filter((filename) => {
    return !BLACKLIST_FILES.includes(filename);
  });

  const allPostsData = await Promise.all(
    fileNames.map(async (fileName) => {
      console.log(fileName);
      const { metadata } = await import(`@/app/posts/${fileName}/page.mdx`);
      return {
        id: fileName,
        ...metadata,
      };
    }),
  );

  return allPostsData.sort(({ date: a }, { date: b }) => {
    return new Date(b).valueOf() - new Date(a).valueOf();
  });
}
