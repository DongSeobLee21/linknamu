import LinkCard from "@/components/LinkCard";

const links = [
  { label: "GitHub", href: "https://github.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
  { label: "Blog", href: "https://example.com/" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-sm flex-col items-center gap-8 px-6 py-16 sm:py-24">
      <div className="h-36 w-36 rounded-full border-2 border-black/[.12] dark:border-white/[.16]" />

      <div className="flex flex-col items-center gap-1 text-center">
        <h1 className="text-lg font-semibold">홍길동</h1>
        <p className="text-sm text-black/60 dark:text-white/60">
          안녕하세요, 저의 링크 모음입니다 👋
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
