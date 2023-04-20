import Image from 'next/image'
import React from 'react'
import '../globals.css'

const StatCards = ({title, stats, icon}) => {
  let colour = "#000000"
  if (title === 'Total Revenues'){
    colour = "bg-[#DDEFE0]"
  }
  else if (title === 'Total Transactions'){
    colour = "bg-[#F4ECDD]"
  }
  else if (title === 'Total Likes'){
    colour = "bg-[#EFDADA]"
  }
  else if (title === 'Total Users'){
    colour = "bg-[#DEE0EF]"
  }

  return (
    <div className={colour}>
      <Image className='bg-inherit h-fit' src={icon} alt={title}/>
      <div className='bg-transparent w-[10vw]'>
        {title}
        <br/>
        {stats}
      </div>     
    </div>
  )
}

export default StatCards
