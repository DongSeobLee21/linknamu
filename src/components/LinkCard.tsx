type LinkCardProps = {
  label: string;
  href: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ label, href, count, onClick }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="flex w-full items-center justify-between gap-3 rounded-2xl border border-white/60 bg-white/45 px-6 py-4 text-[15px] font-semibold text-[#4a3728] shadow-[0_8px_24px_-8px_rgba(180,120,70,0.35)] backdrop-blur-md transition-all duration-200 ease-out hover:-translate-y-0.5 hover:bg-white/60 hover:shadow-[0_12px_28px_-8px_rgba(180,120,70,0.4)]"
    >
      <span>{label}</span>
      <span className="text-xs font-normal text-[#b08a6a]">{count}회</span>
    </a>
  );
}
