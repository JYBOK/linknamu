import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 더미 데이터: 나중에 실제 내용으로 교체
const profile = {
  name: "홍길동",
  bio: "링크나무 샘플 · 개발자 / 크리에이터",
};

const links = [
  { id: "github", title: "GitHub", url: "https://github.com" },
  { id: "linkedin", title: "LinkedIn", url: "https://www.linkedin.com" },
  { id: "blog", title: "Blog", url: "https://example.com/blog" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-8 px-5 py-12 sm:py-16">
      <Profile name={profile.name} bio={profile.bio} />
      <nav className="flex w-full flex-col gap-4" aria-label="링크 목록">
        {links.map((link) => (
          <LinkCard key={link.id} title={link.title} url={link.url} />
        ))}
      </nav>
    </main>
  );
}
