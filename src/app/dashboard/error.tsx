"use client";

import { useEffect } from "react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to an error reporting service
  }, [error]);

  return (
    <div>
      <p>{error?.message || "Something went wrong"}</p>

      {/* Attempt to retry */}
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
