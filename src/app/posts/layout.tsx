"use client";
import { MDXLayout } from "@/components";
import { useCodeHighlighter } from "@/hooks";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode }) {
  useCodeHighlighter();

  return <MDXLayout>{children}</MDXLayout>;
}
