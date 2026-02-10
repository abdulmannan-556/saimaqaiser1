import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <h1 className="text-6xl font-bold text-foreground sm:text-7xl">
        404
      </h1>
      <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
        Oops! The page you are looking for does not exist.
      </p>
      <p className="mt-2 text-sm text-muted-foreground">
        It might have been removed or the URL is incorrect.
      </p>
      <Button asChild className="mt-6">
        <Link href="/">Go Back Home</Link>
      </Button>
    </div>
  );
}
