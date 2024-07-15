import React from 'react'
import { Buttons } from './Buttons'

export const MenuList = () => {
  const list = ["All" , "Music", "Dances" ,"SuperSinger3","JrNTR","Devara","Kalki","Prabhas","janasena","Pawan Kalyan","JavaScript","React","HTML","CSS","Nextjs","Threejs","Nodejs","MongoDB","Money","Motivation","Stocks"]
  return (
    <div className="p-2 m-2  whitespace-nowrap">
      <div className="inline-flex ">
        {list.map((name, index) => (
          <Buttons  key={index} name={name} />
        ))}
      </div>
    </div>
  );
}
