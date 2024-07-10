// import dbConnect from "@/dbConnect";
// import { NextRequest, NextResponse } from "next/server";
// import Person from "../../../../models/Person";

// export async function POST(req: NextRequest) {
//   if (req.method === "POST") {
//     await dbConnect();
//     const body = await req.json(); 
//     const { name } = body;
//     const createPerson = await Person.create({ name });
//     console.log("Task created", createPerson);
//     return NextResponse.json(createPerson);
//   } else {
//     return NextResponse.json({ message: "Method not allowed" });
//   }
// }

// Snap helemaal niks van deze setup... wijkt ook af van alles wat ik tot dusver heb gevonden over NEXT js en MongoDB
