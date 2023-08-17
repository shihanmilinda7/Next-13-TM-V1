import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {taskid} = await request.json();

  await prisma.tasks.delete({
    where: {
      taskid
    },
  })

  return NextResponse.json({message:"SUCCESS"})
}
