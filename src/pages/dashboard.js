import DashMain from '@/app/components/DashMain'
import Sidebar from '@/app/components/Sidebar'
import React from 'react'
import '../app/globals.css'



const dashboard = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <DashMain/>
    </div>
  )
}

export default dashboard
