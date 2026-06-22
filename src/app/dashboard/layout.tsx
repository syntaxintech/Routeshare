"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <div className="flex h-screen w-full border-4 border-red-500">
      <div className="w-64 border-r flex flex-col justify-between">
        <div className="p-5">
          <h1 className="text-xl uppercase">Routeshare</h1>

          <ul className="mt-10 flex items-start flex-col gap-4">
            <Link href="/dashboard">
              <li
                className={`${pathname === "/dashboard" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}`}
              >
                Dashboard
              </li>
            </Link>
            <Link href="/dashboard/routes">
              <li
                className={`${pathname === "/dashboard/routes" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}`}
              >
                {" "}
                My Routes
              </li>
            </Link>
            <Link href="/record">
              <li
                className={`${pathname === "/record" ? "text-foreground" : "text-muted-foreground hover:text-foreground transition-colors"}`}
              >
                Record New
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div className="flex-1 overflow-auto border-4 border-blue-500">
        {children}
      </div>
    </div>
  );
}
