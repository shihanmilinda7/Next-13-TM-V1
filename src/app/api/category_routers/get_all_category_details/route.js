import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { } = await request.json();

  let res;
  const categoriesData = await prisma.categories.findMany({});

  if (categoriesData.length > 0) {
    for (let i = 0; i < categoriesData.length; i++) {
      const element = categoriesData[i];
      const categoryDetailData = await prisma.categorydetails.findMany({
        where: {
          categoryid: element.categoryid
        },
      });
      element.categoryValues = categoryDetailData;
    }
    res = { message: "SUCCESS", categoriesData }
  } else {
    res = { message: "FAIL" }
  }
  return NextResponse.json(res)
}
