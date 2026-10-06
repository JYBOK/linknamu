import LinkList from "@/components/LinkList";
import Profile from "@/components/Profile";
import { links } from "@/data/links";

// 더미 데이터: 나중에 실제 내용으로 교체
const profile = {
  name: "JOIN NOVATECH",
  bio: "섬유 MES 전문 | 요즘에는 AI 개발에 관심이 많아요",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-10 px-6 py-16 sm:py-24">
      <Profile name={profile.name} bio={profile.bio} />
      <LinkList links={links} />
    </main>
  );
}
