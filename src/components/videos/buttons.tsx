"use client";
import { useRouter } from "next/navigation";

import { cn } from "@/lib/utils";

const buttons = [
  { id: "red", color: "bg-red-500" },
  { id: "yellow", color: "bg-yellow-400" },
  { id: "green", color: "bg-green-600" },
] as const;

const Buttons = () => {
  const router = useRouter();
  return (
    <>
      {buttons.map(({ id, color }) => (
        <div
          key={id}
          className={cn(
            "rounded-full size-[12px] shrink-0 cursor-pointer",
            color
          )}
          onClick={() => {
            if (id === "red") router.push("/");
          }}
        />
      ))}
    </>
  );
};

export default Buttons;
