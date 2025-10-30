import React from 'react'

export default function Header() {
  return (
    <div className="flex bg-indigo-900 text-white">
      <div className='flex w-64 p-4  h-20 items-center'>
        <a href="" className="flex items-center">
          <div className='bg-amber-950 inline-block rounded-full w-20 h-16'></div>
          <span className='text-md text-balance ml-2'>San Fernando De Dilao Parish</span>
        </a>
        
      </div>
      <div className='justify-self-end grow align-middle bg-blue-40 h-14 py-4 px-8'>
        <span className="text-2xl ">Ministry Schedule Center</span>
      </div>
    </div>
  )
}
