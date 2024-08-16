"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();
  return (
    <main className="grid min-h-[clac(100dvh-5rem)] h-[clac(100dvh-5rem)]  place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-7xl font-semibold dark">404</p>
        <h1 className="mt-4 text-3xl  font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base  leading-7 text-gray-600">
          Sorry, we couldn’t find the page you’re looking for.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="rounded-md bg-dark px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-dark/85 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Go back home
          </Link>
          <Button
            onClick={() => router.refresh()}
            variant={"destructive"}
            size={"lg"}
          >
            {" "}
            TryA Again
          </Button>
        </div>
      </div>
    </main>
  );
}
