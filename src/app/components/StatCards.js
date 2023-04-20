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
    <div className={`mx-[1%] w-[20%] h-[14vh] p-4 relative rounded-2xl ${colour}`}>
      <Image className='absolute top-4 right-4 bg-inherit h-fit' src={icon} alt={title}/>
      <div className='absolute bottom-2 w-fit max-w-[100%] bg-transparent'>
        <span className='bg-inherit font-Lato text-sm font-[400]'>{title}</span>
        <br/>
        <span className='bg-inherit text-2xl font-Sans font-[800]'>{stats}</span>
      </div>     
    </div>
  )
}

export default StatCards
