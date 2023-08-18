import React from 'react'
import {Sidebar , NavD ,DFeed, BottomNav} from '../components'

const Dashboard = () => {
  return (
    <div className='dash-scroll'>
        <Sidebar />
        <NavD />
        <DFeed />
       <BottomNav />
    </div>
  )
}

export default Dashboard