import dbConnect from "@/dbConnect";
import { NextRequest, NextResponse } from "next/server";
import Task from "../../../../models/Task";
// import CompanyList from '../../../../models/CompanyList;'

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    await dbConnect();
    const body = await req.json();
    const { name } = body;
    const createTask = await Task.create({ name });
    console.log("Task created", createTask);
    return NextResponse.json(createTask);
  } else {
    return NextResponse.json({ message: "Method not allowed" });
  }
}
