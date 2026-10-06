"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";

type LinkItem = { id: string; title: string; url: string };

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 비어 있고, 카드는 0회로 표시됨
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((error) => console.error("클릭 수 불러오기 실패:", error));
  }, []);

  const handleClick = (id: string) => {
    // 즉시 화면에 반영하고, 서버 값이 오면 그 값으로 맞춤
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // 새 탭이 열려도 요청이 끊기지 않도록 keepalive 사용
    fetch(`/api/clicks/${id}`, { method: "POST", keepalive: true })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { count: number }) =>
        setCounts((prev) => ({ ...prev, [id]: data.count }))
      )
      .catch((error) => console.error("클릭 수 저장 실패:", error));
  };

  return (
    <nav className="flex w-full flex-col gap-5" aria-label="링크 목록">
      {links.map((link) => (
        <LinkCard
          key={link.id}
          title={link.title}
          url={link.url}
          count={counts[link.id] ?? 0}
          onClick={() => handleClick(link.id)}
        />
      ))}
    </nav>
  );
}
