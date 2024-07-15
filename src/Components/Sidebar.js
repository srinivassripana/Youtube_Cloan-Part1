import React from 'react'
import { useSelector } from 'react-redux'

export const Sidebar = () => {
  const isMenuOpen = useSelector((store)=>store.app.isMenuOpen);
  if(!isMenuOpen) return null;
  return (
    <div className='p-2 m-2 box shadow-xl w-1/6 h-auto'>
     <div className='p-2 m-2  max-h-fit'>
     <h1 className='font-bold pt-2'>Home</h1>
      <h1 className='font-bold pt-1'>Shorts</h1>
      <h1 className='font-bold pt-1'>Subscribtions</h1>
      <hr className="w-48 h-1  my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700"></hr>
      <h1 className='font-bold pt-1'>Explore</h1>
      <ul>
        <li>Trending</li>
        <li>Shopping</li>
        <li>Music</li>
        <li>Films</li>
        <li>Gaming</li>
        <li>Courses</li>
      </ul>
      <hr className="w-48 h-1  my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700"></hr>
      <h1 className='font-bold pt-1'>Subscribtions</h1>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
      <hr className="w-48 h-1  my-1 bg-gray-100 border-0 rounded md:my-2 dark:bg-gray-700"></hr>
      {/* <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
      <h1 className='font-bold pt-1'>Settings</h1>
      <h1 className='font-bold pt-1'>Report History</h1>
      <h1 className='font-bold pt-1'>SendFeedback</h1>
      <h1 className='font-bold pt-1'>Help</h1>
     </div>
    </div>
  )
}
