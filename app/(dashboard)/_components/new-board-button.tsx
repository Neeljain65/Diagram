"use client";

import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/use-api-mutation";
import { cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface NewBoardButtonProps {
  orgId: string;
  disabled?: boolean;
}

export const NewBoardButton = ({ orgId, disabled }: NewBoardButtonProps) => {
  const router = useRouter();
  const { mutate, pending } = useApiMutation(api.board.create);
  const onClick = async () => {
    mutate({
      orgId: orgId,
      title: "Untitled",
    })
      .then((id) => {
        toast.success("Board created successfully");
        router.push(`/board/${id}`);
      })
      .catch((error) => {
        toast.error("Failed to create board");
      });
  };
  return (
    <button
      disabled={disabled}
      onClick={() => {
        onClick();
      }}
      className={cn(
        "col-span-1 aspect-[100/127] bg-blue-600 rounded-lg hover:bg-blue-800 flex flex-col items-center justify-center py-6",
        (pending || disabled) && "opacity-75 cursor-not-allowed"
      )}
    >
      <div />
      <Plus className="h-12 w-12 text-white stroke-1" />
      <p className="text-sm text-white font-light ">Create Board</p>
    </button>
  );
};
