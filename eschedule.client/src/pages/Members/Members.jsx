import BasicTable from "../../components/Tables/BasicTable";
import { MinistryMembers } from "../../data/ministryMembers";
import Sidebar from "../../components/Sidebar";
import {  useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/16/solid";



export default function Members() {
  const members = MinistryMembers;
 
  useEffect(() => {

  });
  const selectAMember = () =>(member) => {
   
    console.log(member);
   
  };

  return (
    <div className="flex  content-start gap-2 h-full">
      <Sidebar />
      <div className="px-4 py-8 flex w-5/6">
        <div className="bg-white rounded-2xl min-w-full px-8 py-8 gap-6">
         
          <div className="p-4">
            <div className="flex">
              <input type="text" id="demo-form-text" placeholder="Search Member" className=" rounded-md px-3 py-1.5 w-lg  outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" />
              <button className="btn btn-primary w-40 ml-8"><MagnifyingGlassIcon className="size-6 inline-block align-bottom" /> Search</button>
            </div> 
           
         
            <table className="min-w-full table-auto rounded-md border border-gray-700 mt-5">
              <thead>
                <tr>
                  <th className="px-5 py-3 text-left">Last name</th>
                  <th className=" py-3 text-left">First name</th>
                 <th className=" py-3 text-left">Birthdate</th>
                  <th className=" py-3 text-left">Status</th>
                  <th className="py-3 text-left">Years in Service</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {members.map((member) => (
                  <tr key={member.id} className="border border-gray-700">
                    <td className="px-4 py-2">{member.firstName}</td>
                    <td>{member.lastName}</td>
                    <td>July 1, 1995</td>
                    <td ><span className="text-green-500 font-bold">Active</span> <span className="text-orange-500 font-bold">Inactive</span> <span className="text-amber-700">LOA</span></td>
                  <td> 15 years</td>
                     <td className="text-right pr-4"><button onClick={selectAMember(member)} className="btn btn-primary w-30 text-sm">View Details</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div>
          
          <div id="toast-bottom-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 bg-green-500 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm right-5 bottom-8 text-white" role="alert">
            <div class="text-md font-normal">Sucessfully Updated Member!</div>
        </div>
          <div id="toast-bottom-right" class="fixed flex items-center w-full max-w-xs p-4 space-x-4 bg-red-500 divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow-sm right-5 bottom-30 text-white" role="alert">
            <div class="text-md font-normal">Member info can't be updated. Please make sure to place valid info.</div>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
}
