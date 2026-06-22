import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div>
      <Link href="/">
        <h1>Routeshare</h1>
      </Link>
      <h1>This page doesn't exist</h1>
    </div>
  );
}
