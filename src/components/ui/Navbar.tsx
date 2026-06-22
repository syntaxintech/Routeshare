"use client";
import Link from "next/link";
import { Button } from "./button";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto w-full">
        <Link href="/">
          <h1>Routeshare</h1>
        </Link>

        <ul className="flex gap-6 items-center">
          <Link href="/how-it-works">
            <li
              className={
                pathname === "/how-it-works"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              How it works
            </li>
          </Link>
          <Link href="#">
            <li
              className={
                pathname === "/pricing"
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground transition-colors"
              }
            >
              Pricing
            </li>
          </Link>
        </ul>
        <Link href="/login">
          <Button>Get started free</Button>
        </Link>
      </nav>
    </header>
  );
}
