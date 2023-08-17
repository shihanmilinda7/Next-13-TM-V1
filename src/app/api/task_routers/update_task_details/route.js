import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {taskid, staffid, clientname, categoryid, location, visitcount} = await request.json();

console.log("console",taskid, staffid, clientname, categoryid, location, visitcount,)
  const updateTask= await prisma.tasks.updateMany({
    where: { taskid },
    data: {
      staffid, 
      clientname, 
      categoryid, 
      location, 
      visitcount
    },
  });

  return NextResponse.json({message:"SUCCESS",updateTask})
  // return NextResponse.json({message:"SUCCESS"})
}
