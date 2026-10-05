type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full rounded-2xl border border-white/60 bg-white/40 px-6 py-[18px] text-center text-base font-medium tracking-tight shadow-[0_8px_32px_rgba(120,70,40,0.08)] backdrop-blur-md transition duration-300 hover:bg-white/60 hover:shadow-[0_10px_36px_rgba(120,70,40,0.14)] dark:border-white/10 dark:bg-white/5 dark:shadow-none dark:hover:bg-white/10"
    >
      {title}
    </a>
  );
}
