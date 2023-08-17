import { prisma } from "@/db";
import Card from "../components/card";
import Navbar from "../components/navbar";
import PersonalDetailCard from "../components/personal_detail_card";
import { Prisma } from "@prisma/client";
// import { setUserIdGlobal } from "../globals";

export default async function Dashboard() {


  
  return (
    <div>
      <Navbar />
      <div className="container mx-auto mt-8">
          <h1 className="text-2xl m-4 text-indigo-800 font-semibold">Insights at a Glance: Your Project Dashboard</h1>
        <div className="grid grid-cols-3 gap-4">
          <Card className="hidden" cardTitle="All Projects" description="Number of Projects - 10" style="bg-gradient-to-b from-indigo-600 to-blue-500 text-white"/>
          <Card cardTitle="Ongoing Projects" description="Number of ongoing Projects - 5" style="bg-gradient-to-b from-indigo-400 to-blue-300 text-white"/>
          <PersonalDetailCard/>
        </div>
      </div>
    </div>
  );
}

