type LinkCardProps = {
  title: string;
  url: string;
  count: number;
  onClick?: () => void;
};

export default function LinkCard({ title, url, count, onClick }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className="relative block w-full rounded-2xl border border-white/60 bg-white/40 px-6 py-[18px] text-center text-base font-medium tracking-tight shadow-[0_8px_32px_rgba(120,70,40,0.08)] backdrop-blur-md transition duration-300 hover:bg-white/60 hover:shadow-[0_10px_36px_rgba(120,70,40,0.14)] dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10"
    >
      {title}
      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-normal opacity-50">
        {count}회
      </span>
    </a>
  );
}
