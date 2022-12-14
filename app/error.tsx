"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Button from "src/components/@UI/Button/Button.client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const router = useRouter();

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="w-full flex flex-col items-center">
      <p className="mb-4">Something went wrong!</p>
      <div className="flex flex-row gap-4">
        <Button color="bg-red-500" onClick={() => router.refresh()}>
          Retry
        </Button>
        <Link href="/products">
          <Button>Continue Shopping</Button>
        </Link>
      </div>
    </div>
  );
}
