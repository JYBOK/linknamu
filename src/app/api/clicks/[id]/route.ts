import { NextResponse } from "next/server";
import { links } from "@/data/links";
import { getClicksCollection } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

// 해당 링크의 클릭 수를 1 증가
export async function POST(
  _request: Request,
  { params }: { params: { id: string } }
) {
  if (!links.some((link) => link.id === params.id)) {
    return NextResponse.json({ error: "알 수 없는 링크" }, { status: 404 });
  }
  try {
    const collection = await getClicksCollection();
    const doc = await collection.findOneAndUpdate(
      { _id: params.id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" }
    );
    return NextResponse.json({ id: params.id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("클릭 수 증가 실패:", error);
    return NextResponse.json({ error: "저장 실패" }, { status: 500 });
  }
}
