type ProfileProps = {
  name: string;
  bio: string;
};

export default function Profile({ name, bio }: ProfileProps) {
  return (
    <header className="flex flex-col items-center gap-4 text-center">
      {/* 더미 프로필 사진: 나중에 실제 이미지로 교체 */}
      <div
        aria-hidden="true"
        className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 text-4xl font-bold text-white sm:h-32 sm:w-32"
      >
        {name.charAt(0)}
      </div>
      <div className="space-y-1">
        <h1 className="text-xl font-bold sm:text-2xl">{name}</h1>
        <p className="text-sm text-neutral-500 dark:text-neutral-400">{bio}</p>
      </div>
    </header>
  );
}
