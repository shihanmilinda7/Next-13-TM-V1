import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { categoryid, categoryname, categoryValues } = await request.json();

  console.log("categoryValues", categoryValues,)

  //update category header table
  const updateCategory = await prisma.categories.updateMany({
    where: { categoryid },
    data: {
      categoryname
    },
  });

  for (let i = 0; i < categoryValues.length; i++) {
    const element = categoryValues[i];
    if (element.categorydetailid) {
      const tmpCatDetailId = element.categorydetailid;
      const updateCategoryDetils = await prisma.categorydetails.updateMany({
        where: { categorydetailid: tmpCatDetailId },
        data: {
          categorydetailname: element.categorydetailname
        },
      });
    } else {
      const newCatDetail = await prisma.categorydetails.create({
        data: {
          categoryid: categoryid,
          categorydetailname: element.categorydetailname,
        },
      });
    }

  }

  return NextResponse.json({ message: "SUCCESS" })
  // return NextResponse.json({message:"SUCCESS",updateCategory})
}
