"use client";

import AddNewTaskPopup from "../components/addnew_task_popup";
import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";
import { TaskTable } from "../components/task_table";

export default function Task() {
 
  const [taskRowData, setTaskRowData] = useState("");

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const all_task_details = await fetch(
        "api/task_routers/get_all_task_details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({}),
        }
      );
      const res = await all_task_details.json();
      setTaskRowData(res.tasks);
    };
    // call the function
    fetchData().catch(console.error);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center p-4">
        <h1 className="text-4xl font-extrabold uppercase text-indigo-600 mr-auto">
          Tasks
        </h1>
        <AddNewTaskPopup buttonName="Add Task" delButton = "false"/>
      </div>
      <div>
        {taskRowData && (
          <TaskTable
          taskRowData={taskRowData}
          />
        )}
      </div>
    </div>
  );
}
