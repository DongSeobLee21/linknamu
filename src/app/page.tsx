import Image from "next/image";
import LinkCard from "@/components/LinkCard";

const links = [
  { label: "🐙 깃허브", href: "https://github.com/DongSeobLee21/linknamu" },
  { label: "✍️ 블로그", href: "https://blog.naver.com/dsl0529" },
  { label: "📧 이메일", href: "mailto:dsl0529@naver.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-8 px-6 py-16 sm:py-24">
      <Image
        src="/smartlee.jpg"
        alt="프로필 사진"
        width={150}
        height={150}
        className="h-36 w-36 rounded-full border-2 border-black/[.12] object-cover dark:border-white/[.16]"
        priority
      />

      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-lg font-bold">유아독존</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          이 세상에는 내가 최고다 : 요즘에는 AI에 관심이 많네
        </p>
      </div>

      <div className="flex w-full flex-col gap-3">
        {links.map((link) => (
          <LinkCard key={link.label} label={link.label} href={link.href} />
        ))}
      </div>
    </main>
  );
}
