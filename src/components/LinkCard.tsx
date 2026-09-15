type LinkCardProps = {
  label: string;
  href: string;
};

export default function LinkCard({ label, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full rounded-full border border-black/[.12] dark:border-white/[.16] px-6 py-4 text-center font-medium transition-colors hover:bg-black/[.04] dark:hover:bg-white/[.06]"
    >
      {label}
    </a>
  );
}
