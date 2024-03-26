"use client";
import { useCodeHighlighter } from "@/hooks";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  useCodeHighlighter();

  return <article className="markdown-body">{children}</article>;
}
