import React from 'react'

const App = () => {
  return (
    <div className='h-214 w-360'>
      <div className=' flex flex-col justify-between '>
       {/* nav */}
     <div className='flex justify-between items-center px-10 h-[75px] w-[1440px]'>
      <div>
      <img className='w-[76px] h-[42.75]' src="/brand_logo.png" alt="img" />
     </div>
     <div className=' h-[24px} w-[333px] '>
      <ol className='flex gap[24px] justify-between decoration-0'>
        <li>MENU</li>
        <li>LOCATION</li>
        <li>ABOUT</li>
        <li>CONTACT</li>
      </ol>
     </div>
     <div>
      <button className='h-[31px] w-[75px] bg-[#D01C28] text-white text-[16px]'>login</button>
     </div>
     </div>

      {/* main 1 */}
     <div className='w-[1125px] h-[613px] flex items-center absolute top-[152px] left-[157px]'>
      <div className='h-[613px] w-[595px] flex flex-col gap-[36px]'>
       <span className='w-[595px] h-[306px] leading-[102px]'>
         <h1 className='text-[108px] font-extrabold '>
        YOUR FEET DESERVES THE BEST
        </h1>
       </span>
       <span className='h-[91px] w-[404px]'>
        <p className='text-[#5A5959] text-[16px] font-semibold leading-[100%] '>
        YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
        </p>
       </span>

<div className='h-[41px] w-[331px] flex gap-[40px] '>
  <button className='bg-[#D01C28] text-white py-[6px]h-[41px] w-[150px] px-[16px]
]'>
    Shop Now
    </button>
    <button className=' py-[6px]h-[41px] w-[150px] px-[16px] border'>
      Catagory
    </button>

    
</div>
<div className='h-[67px] w-[131px] flex flex-col gap-[16px]'>
      <p className='text-[#5A5959] '>Also available on</p>
      <div className='flex gap-[16px]'>
        <img className='h-[32px] w-[32px] object-contain'src="/flipkart.png" alt="" />
        <img className='h-[32px] w-[32px] object-contain'src="/amazon.png" alt="" />
      </div>
    </div>

      </div>
    {/* main 2 */}
       <div>
      <img className='h-[487px] w-[530px]'src="/shoe_image.png" alt="" />
     </div>
     </div>
  </div>
    </div>
    

  )
}

export default App