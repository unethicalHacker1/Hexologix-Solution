"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/services/ai-automation/lead-generation", label: "Lead Generation" },
  { href: "/services/ai-automation/crm-workflows", label: "CRM Workflows" },
  { href: "/services/ai-automation/customer-support", label: "Customer Support" },
  { href: "/services/ai-automation/email-automation", label: "Email Automation" },
  { href: "/services/ai-automation/internal-ops", label: "Internal Ops" },
];

export default function SidebarNav() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-20 hidden md:block w-64 text-purple-200">
      <ul className="space-y-4">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`hover:text-white transition-colors ${
                pathname === href ? "text-white font-semibold" : ""
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}
