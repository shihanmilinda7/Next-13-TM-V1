"use client";

import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import AddNewCategoryPopup from "../components/addnew_category_popup";
import { CategoryTable } from "../components/category_table";

export default function Category() {
 
  const [categoryRowData, setCategoryRowData] = useState("");

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const all_category_details = await fetch(
        "api/category_routers/get_all_category_details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      const res = await all_category_details.json();
      setCategoryRowData(res.categoriesData);
    };
    // call the function
    fetchData().catch(console.error);
  }, []);


  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold uppercase text-indigo-600 mr-auto">
          Category
        </h1>
        <AddNewCategoryPopup buttonName="Add Category" delButton = "false"/>
      </div>
      <div>
        {categoryRowData && (
          <CategoryTable
          categoryRowData={categoryRowData}
          />
        )}
      </div>
    </div>
  );
}
