import React from 'react'
import Left from './Left'
import Right from './Right'

const Main = () => {
  return (
    <div className='absolute top-[286px] left-[198px] w-[1161px] h-[600px] flex  items-center'>
        <Left/>
        <Right/>
    </div>
  )
}

export default Main