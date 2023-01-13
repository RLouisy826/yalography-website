"use client";
import { useRouteRefresh } from "@lib/hooks/useRouteRefresh";
import { useToggle } from "@lib/hooks/useToggle";
import { Share, Trash } from "@lib/icons";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ActionIcon } from "@components/shared/ActionIcon";

type PropTypes = {
  id: number;
  published: boolean;
};

export function ProjectMenu({ id, published }: PropTypes) {
  const [, refresh] = useRouteRefresh();
  const [, toggle] = useToggle();
  const router = useRouter();

  const onDelete = async () => {
    toggle.on();
    const endpoint = new URL("/api/projects", location.origin);
    endpoint.searchParams.set("revalidate", published ? "1" : "0");
    try {
      const res = await fetch(endpoint, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id })
      });
      const json = await res.json();
      if (res.ok) {
        toast.success(json.message);
        refresh();
        router.push("/admin/projects");
      } else {
        throw new Error(json.message, { cause: json.error });
      }
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      }
    } finally {
      toggle.off();
    }
  };

  const onShare = async () => {
    await navigator.share({ url: `${location.origin}/projects/${id}`, title: "Project" });
  };

  return (
    <div className="flex gap-2 self-center h-fit">
      {published && (
        <ActionIcon aria-label="Share project" onClick={onShare} color="violet" className="p-1">
          <Share size={24} />
        </ActionIcon>
      )}
      <ActionIcon onClick={onDelete} aria-label="Delete project" color="red" className="p-1">
        <Trash size={24} />
      </ActionIcon>
    </div>
  );
}
