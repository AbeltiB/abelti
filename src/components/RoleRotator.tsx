"use client";

import { useEffect, useState } from "react";

export default function RoleRotator({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % roles.length);
    }, 2600);
    return () => clearInterval(id);
  }, [roles.length]);

  return (
    <span className="relative inline-flex items-center">
      <span key={index} className="text-gradient animate-[fade-in_0.5s_ease]">
        {roles[index]}
      </span>
      <span className="animate-blink ml-1 inline-block h-[0.9em] w-[2px] translate-y-[0.05em] bg-accent-2 align-middle" />
    </span>
  );
}
