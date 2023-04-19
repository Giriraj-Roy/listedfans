import React from 'react'

const CardSchedule = () => {

  const Event = ({startTime, endTime, title, address}) => {
    return(
      <div>
        <div>
          {title}
        </div>
        <div>
          {startTime}-{endTime}
          <br/>
          at {address}
        </div>
      </div>
    )
  }


  return (
    <div>
      <div>
        Today’s schedule
      </div>
      <div>
        See All 
        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.255719 7.7814C-0.0722496 7.4807 -0.097987 7.06206 0.255719 6.69446L3.0111 3.99918L0.255719 1.3039C-0.0979873 0.936305 -0.0722499 0.516977 0.255719 0.218345C0.582952 -0.0823565 1.13594 -0.0630456 1.44332 0.218345C1.7507 0.498356 4.75389 3.4564 4.75389 3.4564C4.83173 3.52684 4.89364 3.61127 4.93592 3.70464C4.97821 3.79802 5 3.89843 5 3.99987C5 4.10132 4.97821 4.20173 4.93592 4.2951C4.89364 4.38848 4.83173 4.4729 4.75389 4.54334C4.75389 4.54334 1.7507 7.50001 1.44332 7.7814C1.13594 8.06348 0.582952 8.0821 0.255719 7.7814Z" fill="#858585"/>
        </svg>

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
