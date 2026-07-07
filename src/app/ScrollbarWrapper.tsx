"use client";

import { usePathname } from "next/navigation";
import CustomScrollbar from "./components/ui/CustomScrollbar";

export default function ScrollbarWrapper() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  if (isHome) return null;

  return <CustomScrollbar />;
}
