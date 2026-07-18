import React from 'react'

const Left = () => {
  return (
    <div className='flex flex-col gap-[23px]'>
         <div className='flex gap-[32px] w-[472px]'>
            <button className='bg-black text-white rounded px-[18px] py-[10px] w-[220px] '>
                VIA SUPPORT CHAT
            </button>
             <button className='bg-black text-white rounded px-[18px] py-[10px] w-[220px]'>
                VIA CALL
            </button>
        </div>
        <button className='border rounded px-[18px] py-[10px] w-[220px] w-[472px]'>VIA MAIL</button>
       <div className=' h-[268px] flex flex-col items-center font-bold gap-[20px]'>
         <div>
            <h1 className='absolute bg-white flex justify-center items-center p-[4px] top-[223px] left-[24px] h-[21px] w-[52px] gap-[10px]'>Name</h1>
            <input className='w-[440px] border h-[40px] p-5 text-2xl' type="text" />
        </div>
        <div>
            <h1 className='absolute bg-white flex justify-center items-center p-[4px] top-[285px] left-[24px] h-[21px] w-[60px] gap-[10px]'>E-Mail</h1>
            <input className='w-[440px] border h-[40px] p-5 text-2xl' type="text" />
        </div>
        <div>
            <h1 className='absolute bg-white flex justify-center items-center p-[4px] top-[348px] left-[24px] h-[21px] w-[52px] gap-[10px]'>TEXT</h1>
            <textarea className='w-[440px] border h-[129px] p-5 text-2xl' type="text" ></textarea>
        </div>
       </div>

    </div>
  )
}

export default Left