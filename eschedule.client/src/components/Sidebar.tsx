import React from 'react'
import {ChartBarIcon, CalendarIcon, UserIcon, MegaphoneIcon} from '@heroicons/react/16/solid'

export default function Sidebar() {
  return (
      <div className="w-64 bg-indigo-900 h-full text-white" >
           <div className='flex  py-16 px-4 h-20 items-center'>
        <a href="" className="flex items-center">
          <div className='bg-amber-950 inline-block rounded-full w-20 h-16'></div>
          <span className='text-md text-balance ml-2'>San Fernando De Dilao Parish</span>
        </a>
        
      </div>
        <div className='flex flex-col text-center mt-24'>
            <span className='text-sm text-gray-50'>Overview</span>
            <div className="p-6 place-items-center max-w-full">
                <a className="align-middle" href="#"><ChartBarIcon className="size-6 inline-block align-bottom" /> Dashboard</a>
            </div>
            <div  className="p-6 place-items-center max-w-full">
              <a className="align-middle" href="#"><CalendarIcon className="size-6 inline-block align-bottom" /> Calendar</a>
            </div>
            <div className="p-6 place-items-center max-w-full">
                <a className="align-middle" href="/members"><UserIcon className="size-6 inline-block align-bottom" /> Members</a>
            </div>
            <div className="p-6 place-items-center max-w-full">
                 <a className="align-middle" href="#"><MegaphoneIcon className="size-6 inline-block align-bottom" /> Announcements</a>
            </div>
            <div className="p-6 place-items-center max-w-full">
                <a href="#">Parish Website</a>
            </div>
           
        </div>
      </div>
  )
}
