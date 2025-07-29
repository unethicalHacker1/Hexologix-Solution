"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <nav className="text-sm text-purple-300 mt-6 mb-12">
      <Link href="/" className="hover:underline">
        Home
      </Link>
      {segments.map((seg, i) => {
        const path = "/" + segments.slice(0, i + 1).join("/");
        return (
          <span key={i}>
            {" / "}
            <Link href={path} className="hover:underline capitalize">
              {seg.replace(/-/g, " ")}
            </Link>
          </span>
        );
      })}
    </nav>
  );
}
