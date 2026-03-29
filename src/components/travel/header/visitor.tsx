"use client";

import { Eye } from "lucide-react";
import { useEffect } from "react";

import { useVisitorContext } from "@/hooks/visitor";

const Visitor = () => {
  const { setCount, count } = useVisitorContext();

  useEffect(() => {
    if (count) return;

    fetch("/api/visitor")
      .then((res) => res.json())
      .then((data) => setCount(data.value));
  }, [count, setCount]);

  return (
    <div className="inline-flex items-center gap-2 text-xs text-muted-foreground bg-surface-2 border border-border rounded-lg px-3 py-2">
      <Eye size={12} />
      <span>{count ?? "..."} visitors</span>
    </div>
  );
};

export default Visitor;
