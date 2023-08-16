import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { selectedColumns } = await request.json();

  const tmpSelectedColumns = selectedColumns ?? ""

  let res;
  const users = await prisma.staff.findMany({
    select: tmpSelectedColumns,
  });

  if (users.length > 0) {
    res = {message:"SUCCESS",users}
  }else{
    res = {message:"FAIL"}
  }
  return NextResponse.json(res)
}
