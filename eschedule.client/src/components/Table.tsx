import  { useState,useEffect } from "react";
import { MinistryMembers } from "../data/ministryMembers";
import {MassScheduleData}  from "../data/massScheduleData";
import {ServerModel} from "../models/serverModel";
import {MassScheduleModel} from "../models/massScheduleModel";
import {ScheduleModel} from "../models/scheduleModel";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/16/solid";
const Table = () =>{
    const [members, setMembers] = useState(MinistryMembers);
   
    const [masses, setMasses]  = useState(MassScheduleData);
    
    const [massServers, setMassServers] = useState<ScheduleModel[]>([]);
    
    useEffect(() =>{
         let tempMassServers:ScheduleModel[] = [];
     
         masses.map((schedule) => {
            const scheduledServers = members.filter((server)=> (   
                server.currentMassSchedule.includes(schedule.id)
               )
             
             );
             
            tempMassServers.push({
                id: Math.random(),
                mass: schedule,
                servers:scheduledServers

             });
        });
        setMassServers(tempMassServers);
        
    },[]);
   

    return(
        <>
     
         <div className="p-4 w-[93%] ml-[2rem]">
            <div className="flex border-[1px] rounded-md border-gray-600 min-h-24 min-w-full">
              
            <div className="p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label htmlFor="first-name" className="block text-sm/6 font-medium text-gray-900">
                First name
              </label>
              <div className="mt-2">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="last-name" className="block text-sm/6 font-medium text-gray-900">
                Last name
              </label>
              <div className="mt-2">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
           
            </div>
              <div className="p-4 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3 mt-8">
               <button className="bg-indigo-600 text-white w-xs px-4 h-9" >Search</button>
            </div>
              </div>
               
             </div>
             <table className="min-w-full table-auto rounded-md border border-gray-700 mt-5">
                <thead>
                    <tr>
                        <th className="px-5 py-3 text-left">Last name</th>
                        <th className="px-5 py-3 text-left">First name</th>
                        <th className="px-5 py-3 text-left">Day</th>
                        <th className="px-5 py-3 text-left">Time</th>
                        <th></th>
                    </tr>
                      
                </thead>
                <tbody>
                    {massServers.map((schedule:ScheduleModel, index) =>
                        schedule.servers.map((server)=>(
                         <tr key={index} className="border border-gray-700">
                            <td className="px-4 py-2">{server.lastName}</td>
                            <td className="px-4 py-2">{server.firstName}</td>
                            <td className="px-4 py-2">{schedule.mass.dayOfWeek}</td>
                            <td className="px-4 py-2">{schedule.mass.time}</td>
                            <td><button className="bg-indigo-600 text-white px-2 ">View</button></td>
                        </tr>
                        ))
                     
                    )}
                </tbody>
                
             </table>
              <div>
          <nav aria-label="Pagination" className="isolate inline-flex -space-x-px rounded-md shadow-xs mt-4">
            <a
              href="#"
              className="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Previous</span>
              <ChevronLeftIcon aria-hidden="true" className="size-5" />
            </a>
            {/* Current: "z-10 bg-indigo-600 text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600", Default: "text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:outline-offset-0" */}
            <a
              href="#"
              aria-current="page"
              className="relative z-10 inline-flex items-center bg-indigo-600 px-4 py-2 text-sm font-semibold text-white focus:z-20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              1
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              2
            </a>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              3
            </a>
            <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 inset-ring inset-ring-gray-300 focus:outline-offset-0">
              ...
            </span>
            <a
              href="#"
              className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
            >
              8
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              9
            </a>
            <a
              href="#"
              className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              10
            </a>
            <a
              href="#"
              className="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 inset-ring inset-ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
            >
              <span className="sr-only">Next</span>
              <ChevronRightIcon aria-hidden="true" className="size-5" />
            </a>
          </nav>
        </div>
         </div>
        </>
    );
}

export default Table;