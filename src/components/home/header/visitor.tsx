"use client";

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
    <div className="pr-[8px]">
      <p>🫰 누적 방문자 수 : {count}</p>
    </div>
  );
};

export default Visitor;
