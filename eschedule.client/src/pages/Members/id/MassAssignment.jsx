import React from "react";
import Sidebar from "../../../components/Sidebar";

function MassAssignment() {
  return (
    <div className="flex content-start gap-2 h-full">
      <Sidebar />
      <div className="px-4 py-8 flex min-h-screen w-6/6 ">
        <div className="bg-white rounded-2xl min-w-full px-8 py-8 gap-6">
          
          <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div class="flex shrink-0 items-center mr-12">
          <h1 className="font-bold">Name: Justine Ronatay</h1>
          </div>
            <div class="flex space-x-4">
              <a
                href="#"
                aria-current="page"
                className="  border-b-2 border-gray-300 px-3 py-2 text-md font-bold text-gray-400 hover:border-black  hover:text-black"
              >
                Basic Information
              </a>
              <a
                href="#"
                className="border-b-2 px-3 py-2 text-md font-bold text-black"
              >
                Mass Assignment
              </a>
              <a
                href="#"
                className="border-b-2 border-gray-300 px-3 py-2 text-md font-bold text-gray-400 hover:border-black  hover:text-black"
              >
                Attendance
              </a>
              <a
                href="#"
                className="border-b-2 border-gray-300 px-3 py-2 text-md font-bold text-gray-400 hover:border-black  hover:text-black"
              >
                Remarks
              </a>
            </div>
            <div>
              <button className="btn btn-primary">Assign</button>
            </div>
          </div>


            <table className="min-w-full table-auto rounded-md border border-gray-700 mt-5">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-left">Day</th>
                  <th className=" py-3 text-left">Time</th>
                 <th className=" py-3 text-left">Start Date</th>
                  <th className=" py-3 text-left">End Date</th>
                  <th className=" py-3 text-left">Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                
                  <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                     <td>On going</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                  <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>6:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                     <td>On going</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                     <td className="text-red-400">Ended</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                   <td className="text-red-400">Ended</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                    <td className="text-red-400">Cancelled</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                     <td className="text-red-400">Cancelled</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                     <td className="text-red-400">Cancelled</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                      <td className="text-red-400">Cancelled</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                     <td className="text-red-400">Cancelled</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                     <td className="text-red-400">Cancelled</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                    <tr  className="border border-gray-700">
                    <td className="px-4 py-4">Sunday</td>
                    <td>9:00 AM</td>
                    <td>November 2,2025</td>
                    <td >November 26, 2025</td>
                    <td className="text-red-400">Cancelled</td>
                     <td className="text-right pr-4"><button className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
            
              </tbody>
            </table>
        </div>
      </div>
    </div>
  );
}

export default MassAssignment;
