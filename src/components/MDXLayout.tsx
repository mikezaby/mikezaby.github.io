import { ReactNode } from "react";

export default function MDXLayout({ children }: { children: ReactNode }) {
  return <article className="markdown-body">{children}</article>;
}
