import { prisma } from "@/db";
import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { selectedColumns } = await request.json();

  const tmpSelectedColumns = selectedColumns ?? ""

  let res;
  
  const rawQuery = Prisma.sql`SELECT t.*,s.name,c.categoryname FROM tasks AS t LEFT JOIN staff AS s ON t.staffid = s.staffid INNER JOIN categories AS c ON t.categoryid = c.categoryid`;
  const tasks = await prisma.$queryRaw(rawQuery);

  if (tasks.length > 0) {
    res = {message:"SUCCESS",tasks}
  }else{
    res = {message:"FAIL"}
  }
  return NextResponse.json(res)
}
// export async function POST(request) {
//   const { selectedColumns } = await request.json();

//   const tmpSelectedColumns = selectedColumns ?? ""

//   let res;
  
//   const tasks = await prisma.tasks.findMany({
//     select: tmpSelectedColumns,
//   });

//   if (tasks.length > 0) {
//     res = {message:"SUCCESS",tasks}
//   }else{
//     res = {message:"FAIL"}
//   }
//   return NextResponse.json(res)
// }
