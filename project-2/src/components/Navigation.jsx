
const Navigation = () => {
  return (
    <nav className="flex justify-between">
        <div className="h-[72px]">
           <img className=" h-[72px] w-[72px] absolute left-[95px] top-[5px]"src="/favicon.svg" alt="logo" />
        </div>
        <div className="absolute left-[1128px] top-[24px] w-[231px]">
            <ul className="flex gap-[24px] w-full justify-center">
                <li>Home</li>
                <li>About</li>
                <li>contact</li>
            </ul>
        </div>
    </nav>
  )
}

export default Navigation