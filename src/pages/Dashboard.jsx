import React from 'react'

export const Dashboard = () => {
  return (
    <div className='w-full h-screen p-2 flex flex-col gap-2'>
      <div className='w-1/2 sm:w-full md:w-full lg:w-full xl:w-full bg-red-500 font-bold text-xl flex justify-center items-center py-5'>Merah</div>
      <div className='flex flex-col xl:flex-row h-full w-full gap-2'>
        <div className='bg-purple-500 h-full w-full xl:w-1/2 font-bold text-xl flex justify-center items-center xl:order-first md:order-last'>Ungu</div>
        <div className='h-full md:w-full xl:w-1/2 flex flex-col gap-2'>
          <div className='bg-green-500 h-full xl:h-1/2 font-bold text-xl flex justify-center items-center order-last sm:order-first md:order-first lg:order-first xl:order-first'>Hijau</div>
          <div className='flex h-1/2 gap-2'>
            <div className='bg-blue-500 w-1/2 font-bold text-xl flex justify-center items-center order-last sm:order-first md:order-first lg:order-first xl:order-first'>Biru</div>
            <div className='bg-pink-500 w-1/2 font-bold text-xl flex justify-center items-center'>Pink</div>
          </div>
        </div>
      </div>
    </div>
  )
}
