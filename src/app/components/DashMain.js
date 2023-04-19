import React from 'react'
import StatCards from './StatCards'
import icon1 from '../../assets/Vector0.png'
import icon2 from '../../assets/Vector (1).png'
import icon3 from '../../assets/Vector (2).png'
import icon4 from '../../assets/Vector (3).png'
import DashHead from './DashHead'


const DashMain = () => {
  return (
    <div className='ml-[1vw] my-[5vh] w-[80vw] block'>
      <DashHead/>
      <div className='bg-transparent flex'>
        <StatCards title="Total Revenues" stats="$2,129,430" color="#DDEFE0" icon={icon1} />
        <StatCards title="Total Transactions" stats="1520" color="#F4ECDD" icon={icon2} />
        <StatCards title="Total Likes" stats="9721" color="#EFDADA" icon={icon3} />
        <StatCards title="Total Users" stats="892" color="#DEE0EF" icon={icon4} />

      </div>

    </div>
  )
}

export default DashMain
