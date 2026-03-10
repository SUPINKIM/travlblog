"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { CATEGORIES } from "@/lib/constants";

export function CategoryFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const current = searchParams?.get("category") || "all";

  const handleSelect = (value: string) => {
    const params = new URLSearchParams(searchParams?.toString() ?? "");
    if (value === "all") {
      params.delete("category");
    } else {
      params.set("category", value);
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="flex items-center gap-2 flex-wrap">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.value}
          onClick={() => handleSelect(cat.value)}
          className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 ${
            current === cat.value
              ? "bg-primary text-primary-foreground"
              : "bg-surface-2 text-muted-foreground hover:text-foreground hover:bg-surface-3"
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
