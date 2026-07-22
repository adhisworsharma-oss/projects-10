import { useState } from 'react'


const viaCall =()=>{
return   console.log("call");
  
}


const Left = () => {
  const submit=(e)=>{
  e.preventDefault()
  
  setname(e.target[0].value);
  setemail(e.target[1].value);
  settext(e.target[2].value);
}
const [name, setname] = useState("")
const [email,setemail]=useState("")
const [text, settext] = useState("")
  return (
    <div className='flex flex-col end gap-[23px]'>
         <div className='flex gap-[32px] w-[472px]'>
            <button className='bg-black text-white rounded px-[18px] py-[10px] w-[220px] '>
                VIA SUPPORT CHAT
            </button>
             <button onClick={viaCall} className='bg-black active:scale-95 text-white rounded px-[18px] py-[10px] w-[220px]'>
                VIA CALL
            </button>
        </div>   
        <button className='border rounded px-[18px] py-[10px] w-[220px] w-[472px]'>VIA MAIL</button>
       <form onSubmit={(e)=>{
        submit(e)
       }} className=' h-[268px] flex flex-col  items-center font-bold gap-[20px]'>
         <div>
            <h1 className='absolute bg-white flex justify-center items-center p-[4px] top-[223px] left-[24px] h-[21px] w-[52px] gap-[10px]'>Name</h1>
            <input className='w-[440px] border h-[40px] p-5 text-lg' type="text" />
        </div>
        <div>
            <h1 className='absolute bg-white flex justify-center items-center p-[4px] top-[285px] left-[24px] h-[21px] w-[60px] gap-[10px]'>E-Mail</h1>
            <input className='w-[440px] border h-[40px] p-5 text-lg' type="email" />
        </div>
        <div>
            <h1 className='absolute bg-white flex justify-center items-center p-[4px] top-[348px] left-[24px] h-[21px] w-[52px] gap-[10px]'>TEXT</h1>
            <textarea className='w-[440px] border h-[129px] p-5 text-lg' type="text" ></textarea>
        </div>
         <div className="flex items-end ml-55">
          <button   className='bg-black active:scale-95 text-white rounded px-[18px] py-[10px] w-[220px]'>Submit</button>
        </div>
        <div>
         <h1>you're name is  {name}</h1><br/>
        <h1>you're email is  {email}</h1><br />
         <h1> you wrote <br/> {text}</h1>
        </div>

       </form>
      
    </div>
  )
}

export default Left