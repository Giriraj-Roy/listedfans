import React from 'react'
import '../globals.css'

const CardSchedule = () => {

  const Event = ({startTime, endTime, title, address}) => {
    return(
      <div className='mx-4 my-3 px-2 bg-inherit
                      border-l-[6px] border-[#9BDD7C]
                      font-Lato
      '>
        <div className='bg-inherit text-[#666666] text-base font-Lato font-[700]'>
          {title}
        </div>
        <div className='bg-inherit text-sm text-[#999999]  font-Lato font-[400]'>
          {startTime}-{endTime}
          <br/>
          at {address}
        </div>
      </div>
    )
  }


  return (
    <div className='ml-[2vw] bg-white rounded-2xl w-[40%] h-fit p-[1rem]'>
      <div className='mb-6 relative bg-inherit flex'>
        <div className='mx-4 bg-inherit text-lg text-black font-Montserrat font-[800]'>
          Today’s schedule
        </div>
        <div className='flex absolute top-0 right-[1rem] text-sm text-[#858585] font-Montserrat font-[400] bg-inherit'>
          See All 
          <svg className='m-auto ml-2 h-fit' width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585"/>
          </svg>
        </div>

      </div>
      <Event
            title="Meeting with suppliers from Kuta Bali"
            startTime="14:00"
            endTime="15:00"
            address="Sunset Road, Kuta, Bali"
      />
      <Event
            title="Check operation at Giga Factory 1"
            startTime="18:00"
            endTime="20:00"
            address="Central Jakarta "
      />

      
    </div>
  )
}

export default CardSchedule
