import type { MDXComponents } from "mdx/types";
import Image from "next/image";
import { ComponentProps } from "react";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    Image: (props: ComponentProps<typeof Image>) => (
      <Image {...props} alt={props.alt} />
    ),
  };
}
