import React from 'react'

const Title = ({title}) => {
  return (
    <div className='bg-[#EFF8FF] flex items-center justify-center h-80 w-full'>
        <div>
            <h1 className='text-5xl text-center md:text-5xl text-[#0E384C] font-extrabold'>{title}</h1>
            <p className='mt-5 text-center text-lg font-semibold'>Home / {title}</p>
        </div>
    </div>
  )
}

export default Title