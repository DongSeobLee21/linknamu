import Image from "next/image";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🐙 깃허브", href: "https://github.com/DongSeobLee21/linknamu" },
  { label: "✍️ 블로그", href: "https://blog.naver.com/dsl0529" },
  { label: "📧 이메일", href: "mailto:dsl0529@naver.com" },
];

export default function Home() {
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
            <LinkCard key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      </div>
    </main>
  );
}
