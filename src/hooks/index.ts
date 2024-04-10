import { usePathname } from "next/navigation";
import { useMemo } from "react";

const WEBSITE = "https://mikezaby.com";

export { default as useCodeHighlighter } from "./useCodeHighlighter";

export function useDisqusConfig() {
  const pathname = usePathname();
  const identifier: string = useMemo(() => {
    return pathname.split("/")[2];
  }, [pathname]);

  return {
    url: `${WEBSITE}${pathname}`,
    identifier,
    language: "en_US",
  };
}
