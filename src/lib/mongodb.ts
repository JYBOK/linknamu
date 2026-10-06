import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
if (!uri) {
  throw new Error("MONGODB_URI 환경 변수가 설정되지 않았습니다.");
}

// 개발 모드의 핫 리로드에서 연결이 중복 생성되지 않도록 global에 보관
const globalForMongo = globalThis as unknown as {
  _mongoClientPromise?: Promise<MongoClient>;
};

const clientPromise =
  globalForMongo._mongoClientPromise ?? new MongoClient(uri).connect();

if (process.env.NODE_ENV !== "production") {
  globalForMongo._mongoClientPromise = clientPromise;
}

export type ClickDoc = { _id: string; count: number };

export async function getClicksCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}
