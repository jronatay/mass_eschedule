import  { useState,useEffect } from "react";
import { MinistryMembers } from "../data/ministryMembers";
import {MassScheduleData}  from "../data/massScheduleData";
import {ServerModel} from "../models/serverModel";
import {MassScheduleModel} from "../models/massScheduleModel";
import {ScheduleModel} from "../models/scheduleModel";
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
         <div className="p-4 w-[93%] ml-[5rem]">
             <table className="min-w-full table-auto rounded border border-gray-700 ">
                <thead>
                    <tr>
                        <th className="px-5 py-3 text-left">Last name</th>
                        <th className="px-5 py-3 text-left">First name</th>
                        <th className="px-5 py-3 text-left">Day</th>
                        <th className="px-5 py-3 text-left">Time</th>
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
                            
                        </tr>
                        ))
                     
                    )}
                </tbody>
             </table>
         </div>
        </>
    );
}

export default Table;