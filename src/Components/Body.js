import React from 'react'
import { MainContainer } from './MainContainer'
import { MenuList } from './MenuList'
import { Sidebar } from './Sidebar'

export const Body = () => {
  return (
    <div className='flex'>
      <Sidebar/>
      <div className=''>
        <MenuList/>
        <MainContainer/>
      </div> 
    </div>
  )
}
