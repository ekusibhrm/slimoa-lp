"use client";

import { useEffect, useState } from "react";

export default function StickyCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("hero");
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => setShow(!entry.isIntersecting),
      { threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-50 border-t border-primary-soft bg-white/95 shadow-[0_-4px_16px_rgba(0,0,0,0.06)] backdrop-blur transition-transform duration-300 ease-out ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-8">
        <div className="min-w-0">
          <p className="text-[11px] text-ink-soft">初回限定</p>
          <p className="whitespace-nowrap text-lg font-extrabold text-primary">
            ¥1,980
            <span className="ml-1 text-xs font-bold text-ink-soft">
              (税込)
            </span>
          </p>
        </div>
        <a
          href="#pricing"
          className="shrink-0 rounded-full bg-primary px-6 py-3 text-sm font-extrabold text-white shadow-md shadow-primary/30 transition-transform duration-200 hover:scale-[1.03] hover:shadow-lg active:scale-[1.03]"
        >
          初回限定価格で試す
        </a>
      </div>
    </div>
  );
}
