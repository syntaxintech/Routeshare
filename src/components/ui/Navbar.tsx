"use client";
import Link from "next/link";
import { Button } from "./button";

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center">
      <h1>Routeshare</h1>

      <ul className="flex gap-5 ">
        <Link href="/public/how-it-works">
          <li>How it works</li>
        </Link>
        <li>Pricing</li>
      </ul>

      <Button>Get started free</Button>
    </nav>
  );
}
