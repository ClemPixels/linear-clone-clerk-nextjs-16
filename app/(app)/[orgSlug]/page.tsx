"use client";

import { useQuery } from "convex/react";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import { Loader2 } from "lucide-react";

/**
 * Workspace home — redirects to the first team's issues, or shows the
 * empty state nudging team creation (the sidebar has the create button).
 */
export default function WorkspaceHomePage() {
  const params = useParams<{ orgSlug: string }>();
  const router = useRouter();
  const teams = useQuery(api.teams.list);

  useEffect(() => {
    if (teams && teams.length > 0) {
      router.replace(`/${params.orgSlug}/team/${teams[0]._id}`);
    }
  }, [teams, router, params.orgSlug]);

  if (teams === undefined) {
    return (
      <div className="flex flex-1 items-center justify-center">
        <Loader2 className="size-4 animate-spin text-muted-foreground" />
      </div>
    );
  }

  if (teams.length === 0) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-2 text-center">
        <h2 className="text-lg font-medium">Welcome to Vector</h2>
        <p className="max-w-sm text-sm text-muted-foreground">
          Create your first team from the sidebar to start tracking issues.
        </p>
      </div>
    );
  }

  return null;
}
