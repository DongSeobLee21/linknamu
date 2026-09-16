"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import LinkCard from "@/components/LinkCard";

const links = [
  { id: "github", label: "🐙 깃허브", href: "https://github.com/DongSeobLee21/linknamu" },
  { id: "blog", label: "✍️ 블로그", href: "https://blog.naver.com/dsl0529" },
  { id: "email", label: "📧 이메일", href: "mailto:dsl0529@naver.com" },
];

export default function Home() {
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => res.json())
      .then((data) => setCounts(data.counts ?? {}))
      .catch(() => {});
  }, []);

  function handleLinkClick(id: string) {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    }).catch(() => {});
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center px-6 py-16 sm:py-24">
      <div className="flex w-full max-w-[380px] flex-col items-center gap-10">
        <div className="relative">
          <div className="absolute inset-0 -z-10 rounded-full bg-gradient-to-br from-orange-200/70 to-amber-100/40 blur-2xl" />
          <Image
            src="/smartlee.jpg"
            alt="프로필 사진"
            width={144}
            height={144}
            className="h-36 w-36 rounded-full object-cover shadow-[0_16px_32px_-12px_rgba(180,110,60,0.45)] ring-4 ring-white/70"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-xl font-bold tracking-tight text-[#4a3728]">
            유아독존
          </h1>
          <p className="text-sm leading-relaxed text-[#9c8676]">
            이 세상에는 내가 최고다 : 요즘에는 AI에 관심이 많네
          </p>
        </div>

        <div className="flex w-full flex-col gap-4">
          {links.map((link) => (
            <LinkCard
              key={link.id}
              label={link.label}
              href={link.href}
              count={counts[link.id] ?? 0}
              onClick={() => handleLinkClick(link.id)}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
