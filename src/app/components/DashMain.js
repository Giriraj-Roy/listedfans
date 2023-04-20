import React from 'react'
import StatCards from './StatCards'
import icon1 from '../../assets/Vector0.png'
import icon2 from '../../assets/Vector (1).png'
import icon3 from '../../assets/Vector (2).png'
import icon4 from '../../assets/Vector (3).png'
import DashHead from './DashHead'
import LineChart from './LineChart'
import CardSchedule from './CardSchedule'
import CardChart from './CardChart'


const DashMain = () => {
  return (
    <div className='ml-[1vw] my-[5vh] w-[80vw] block'>
      <DashHead/>
      <div className='bg-transparent flex justify-around w-[90%]'>
        <StatCards title="Total Revenues"     stats="$2,129,430"  icon={icon1} />
        <StatCards title="Total Transactions" stats="1520"        icon={icon2} />
        <StatCards title="Total Likes"        stats="9721"        icon={icon3} />
        <StatCards title="Total Users"        stats="892"         icon={icon4} />

      </div>
      <LineChart/>
      <div className='bg-transparent flex'>
        <CardChart/>
        <CardSchedule/>
      </div>

    </div>
  )
}

export default DashMain
