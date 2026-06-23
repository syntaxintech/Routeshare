"use client";

import { useEffect } from "react";

interface ErrorPage {
  error: Error & { disgest?: string };
  reset: () => void;
}

export default function error({ error, reset }: ErrorPage) {
  useEffect(() => {
    //
  }, [error]);
  return (
    <div>
      <p className="text-red-500">{error?.message || "Something went wrong"}</p>
    </div>
  );
}
