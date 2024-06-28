import dbConnect from "@/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Tasks from "../../../../models/Task";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    await dbConnect();
    const body = await req.json();
    const { name } = body;
    const createTask = await Tasks.create({ name });
    console.log("Task created", createTask);
    return NextResponse.json(createTask);
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
}
