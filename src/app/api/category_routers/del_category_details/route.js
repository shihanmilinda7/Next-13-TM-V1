import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {categoryid} = await request.json();

  await prisma.categories.delete({
    where: {
      categoryid
    },
  })

  return NextResponse.json({message:"SUCCESS"})
}
