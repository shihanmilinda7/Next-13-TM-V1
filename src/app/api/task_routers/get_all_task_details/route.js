import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { selectedColumns } = await request.json();

  const tmpSelectedColumns = selectedColumns ?? ""

  let res;
  const tasks = await prisma.tasks.findMany({
    select: tmpSelectedColumns,
  });

  if (tasks.length > 0) {
    res = {message:"SUCCESS",tasks}
  }else{
    res = {message:"FAIL"}
  }
  return NextResponse.json(res)
}
