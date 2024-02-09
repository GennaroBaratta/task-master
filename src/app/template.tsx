"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { animatePageIn } from "~/lib/animation";

export default function Template({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  useEffect(() => {
    animatePageIn(window.location.href, router);
  });

  return (
    <div>
      <div
        id="transition-element"
        className="w-screen h-screen bg-black z-100 fixed top-0 left-0"
      ></div>
      {children}
    </div>
  );
}