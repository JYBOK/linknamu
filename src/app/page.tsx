import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";

// 더미 데이터: 나중에 실제 내용으로 교체
const profile = {
  name: "JOIN NOVATECH",
  bio: "섬유 MES 전문 | 요즘에는 AI 개발에 관심이 많아요",
};

const links = [
  { id: "github", title: "🐙 깃허브", url: "https://github.com/" },
  {
    id: "homepage",
    title: "🏠 홈페이지",
    url: "https://vercel-deploy-gamma-flax.vercel.app/",
  },
  { id: "email", title: "📧 이메일", url: "mailto:nvt@joinpia.net" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-10 px-6 py-16 sm:py-24">
      <Profile name={profile.name} bio={profile.bio} />
      <nav className="flex w-full flex-col gap-5" aria-label="링크 목록">
        {links.map((link) => (
          <LinkCard key={link.id} title={link.title} url={link.url} />
        ))}
      </nav>
    </main>
  );
}
