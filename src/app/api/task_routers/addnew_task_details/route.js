import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {staffid, clientname, categoryid, location, visitcount} = await request.json();

  const newTask = await prisma.tasks.create({
    data: {
      staffid, 
      clientname, 
      categoryid, 
      location, 
      visitcount,
      status:"Not Completed"
    },
  });

  return NextResponse.json({message:"SUCCESS"})
  // return NextResponse.json({message:"SUCCESS",newUser})
}
