import Image from 'next/image'
import React from 'react'
import '../globals.css'

const StatCards = ({title, stats, color, icon}) => {
  return (
    <div className={`bg-[${color}] `}>
      <Image className='bg-transparent h-fit' src={icon} alt={title}/>
      <div className='bg-transparent w-[10vw]'>
        {title}
        <br/>
        {stats}
      </div>     
    </div>
  )
}

export default StatCards
