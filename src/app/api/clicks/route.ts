import { NextResponse } from "next/server";
import { links } from "@/data/links";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// 모든 링크의 클릭 수를 한 번에 반환: { [id]: count }
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find().toArray();
    const counts: Record<string, number> = {};
    for (const link of links) counts[link.id] = 0;
    for (const doc of docs) {
      if (doc._id in counts) counts[doc._id] = doc.count;
    }
    return NextResponse.json(counts);
  } catch (error) {
    console.error("클릭 수 조회 실패:", error);
    return NextResponse.json({ error: "조회 실패" }, { status: 500 });
  }
}
