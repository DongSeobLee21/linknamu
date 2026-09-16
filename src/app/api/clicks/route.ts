import { NextResponse } from "next/server";
import clientPromise from "@/lib/mongodb";

type ClickDoc = {
  _id: string;
  count: number;
};

async function getCollection() {
  const client = await clientPromise;
  return client.db("linknamu").collection<ClickDoc>("clicks");
}

export async function GET() {
  const collection = await getCollection();
  const docs = await collection.find().toArray();

  const counts: Record<string, number> = {};
  for (const doc of docs) {
    counts[doc._id] = doc.count;
  }

  return NextResponse.json({ counts });
}

export async function POST(request: Request) {
  const { id } = await request.json();

  if (!id || typeof id !== "string") {
    return NextResponse.json({ error: "id가 필요합니다." }, { status: 400 });
  }

  const collection = await getCollection();
  const result = await collection.findOneAndUpdate(
    { _id: id },
    { $inc: { count: 1 } },
    { upsert: true, returnDocument: "after" },
  );

  return NextResponse.json({ count: result?.count ?? 1 });
}
