import React, { useEffect, useState } from 'react'
import { YOUTUBE_URL } from '../utils/constants';
import { VideoCards } from './VideoCards';

export const MainContainer = () => {

  const [videos , setVideos] = useState([]);

  useEffect(()=>{
    getVideos();
  } ,[]);

  const getVideos = async () =>{
    const data = await fetch(YOUTUBE_URL);
    const json = await data.json();
    console.log(json);
    setVideos(json.items)
  }
  return (
    <div className='flex flex-wrap'>
    {videos.map(video=> <VideoCards key = {video.id} info = {video}/>)}
    </div>
  )
}
