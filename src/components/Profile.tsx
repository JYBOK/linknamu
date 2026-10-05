type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <header className="flex flex-col items-center gap-6 text-center">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/logo.jpg"
        alt={`${name} 프로필 사진`}
        width={160}
        height={160}
        className="h-36 w-36 rounded-full border-4 border-white/70 object-contain bg-white shadow-[0_12px_40px_rgba(120,70,40,0.15)] sm:h-40 sm:w-40 dark:border-white/20"
      />
      <div className="space-y-2">
        <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">{name}</h1>
        <p className="text-balance text-base leading-relaxed opacity-70">
          {bio}
        </p>
      </div>
    </header>
  );
}
