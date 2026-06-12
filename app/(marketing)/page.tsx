import Link from "next/link";
import { Button } from "@/components/ui/button";

/**
 * Placeholder landing page — Track F replaces this with the full
 * marketing page.
 */
export default function LandingPage() {
  return (
    <main className="mx-auto flex max-w-3xl flex-col items-center gap-6 px-6 py-32 text-center">
      <h1 className="text-balance text-5xl font-semibold tracking-tight">
        Plan. Build. Ship.
      </h1>
      <p className="max-w-xl text-balance text-lg text-muted-foreground">
        Vector is the issue tracker built for speed — projects, cycles, and a
        keyboard-first workflow, with an AI agent on your team.
      </p>
      <div className="flex gap-3">
        <Button size="lg" asChild>
          <Link href="/sign-up">Get started for free</Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="/pricing">View pricing</Link>
        </Button>
      </div>
    </main>
  );
}
