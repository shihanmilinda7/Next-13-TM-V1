import { prisma } from "@/db";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {categoryname,categoryValues} = await request.json();
  console.log("categoryname",categoryname);
  console.log("categoryValues",categoryValues);

  const newCategoty = await prisma.categories.create({
    data: {
      categoryname
    },
  });

  let res;
  let headerId = newCategoty.categoryid;
  let allNewCategoryDetails = [];

  if (headerId) {
    for (let i = 0; i < categoryValues.length; i++) {
      const element = categoryValues[i];
      const newCatDetail = await prisma.categorydetails.create({
        data: {
          categoryid: headerId,
          categorydetailname: element.categorydetailname,
        },
      });
      allNewCategoryDetails.push(newCatDetail);
      // console.log(newTimeAllocDetils)
    }
    res = { message: "SUCCESS", newCategoty, allNewCategoryDetails }
  } else {
    res = { message: "FAIL" }
  }
  return NextResponse.json(res)
  // return NextResponse.json({message:"SUCCESS"})
}
