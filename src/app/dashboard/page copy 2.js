"use client"

import Navbar from "../components/navbar";
import React, { useEffect, useState } from "react";

export default function Dashboard() {


  const [taskData, setTaskData] = useState([]);

  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      const task_details = await fetch(
        "api/task_routers/get_sel_task_details",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ selectedColumns: { taskid: true, clientname: true, location: true }, staffid: "1" }),
        }
      );
      const res = await task_details.json();
      setTaskData(res.tasks);
    };
    // call the function
    fetchData().catch(console.error);
  }, []);


  return (
    <div>
      <Navbar />
      <h1 className="text-2xl m-4 text-indigo-800 font-semibold">Insights at a Glance: Your Project Dashboard</h1>

      <div className="flex flex-wrap pt-4 bg-red-900">

        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4 bg-green-800">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg overflow-y-scroll">

          </div>
        </div>

        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 mb-4 bg-green-800">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-3 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs"> Traffic</h5>
                  <span className="font-semibold text-xl text-blueGray-700">334,100</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-red-500">
                    <i className="fas fa-chart-bar"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 2,99% </span>
                <span className="whitespace-nowrap"> Since last month </span></p>
              <div>
                <h1>sadasd</h1>
              </div>
            </div>
          </div>
        </div>

        <div className=" mt-4 w-full lg:w-6/12 xl:w-3/12 px-5 bg-green-800">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-4 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">New users</h5>
                  <span className="font-semibold text-xl text-blueGray-700">2,999</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-pink-500">
                    <i className="fas fa-chart-pie"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 4,01%</span>
                <span className="whitespace-nowrap"> Since last week </span></p>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">Sales</h5>
                  <span className="font-semibold text-xl text-blueGray-700">901</span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-lightBlue-500">
                    <i className="fas fa-users"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-red-500 mr-2"><i className="fas fa-arrow-down"></i> 1,25% </span>
                <span className="whitespace-nowrap"> Since yesterday </span></p>
            </div>
          </div>
        </div>

        <div className="mt-4 w-full lg:w-6/12 xl:w-3/12 px-5">
          <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
            <div className="flex-auto p-4">
              <div className="flex flex-wrap">
                <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                  <h5 className="text-blueGray-400 uppercase font-bold text-xs">Performance</h5>
                  <span className="font-semibold text-xl text-blueGray-700">51.02% </span>
                </div>
                <div className="relative w-auto pl-4 flex-initial">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-emerald-500">
                    <i className="fas fa-percent"></i>
                  </div>
                </div>
              </div>
              <p className="text-sm text-blueGray-400 mt-4">
                <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 12% </span>
                <span className="whitespace-nowrap"> Since last mounth </span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// <div className="flex-auto p-4">
//               <div className="flex flex-wrap">
//                 <div className="relative w-full pr-4 max-w-full flex-grow flex-1 flex-col">
//                   <h5 className="text-indigo-900 uppercase font-bold text-2xl"> Tasks</h5>
//                   {/* <h5 className="text-indigo-800 font-semibold text-xl text-blueGray-700 mb-4"> Remaining Tasks - {JSON.stringify(taskData.length)}</h5> */}
//                   {/* <h5>{JSON.stringify(taskData[0])}</h5> */}
//                   <div className="flex flex-col overflow-y-scroll h-1/4 sm:h-1/4 md:h-1/4 lg:h-1/4 xl:h-1/4">
//                     {taskData.map((task, index) => (
//                       <div className="">
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         {/* <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5>
//                         <h5 className="font-semibold text-sm text-blueGray-700">{task["clientname"]}</h5> */}
//                       </div>
//                     ))}
//                     </div>
//                 </div>
//                 <div className="relative w-auto pl-4 flex-initial">
//                   <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full  bg-green-500">
//                     <i className="fas fa-chart-bar"></i>
//                   </div>
//                 </div>
//               </div>
//               {/* <p className="text-sm text-blueGray-400 mt-4"> */}
//               {/* <span className="text-emerald-500 mr-2"><i className="fas fa-arrow-up"></i> 2,99% </span> */}
//               {/* <span className="whitespace-nowrap"> Since last month </span></p> */}
//             </div>