"use client";

import { DiscussionEmbed } from "disqus-react";
import { MDXLayout } from "@/components";
import { useCodeHighlighter, useDisqusConfig } from "@/hooks";
import { ReactNode } from "react";

const DISCUSS_SHORTNAME = "mikezaby";

export default function Layout({ children }: { children: ReactNode }) {
  useCodeHighlighter();
  const disqusConfig = useDisqusConfig();

  return (
    <div>
      <MDXLayout>{children}</MDXLayout>

      <DiscussionEmbed shortname={DISCUSS_SHORTNAME} config={disqusConfig} />
    </div>
  );
}
