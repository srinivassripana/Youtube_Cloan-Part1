import React from 'react';

export const VideoCards = ({ info }) => {
  // Check if info is defined and has snippet and statistics properties
  if (!info || !info.snippet || !info.statistics) {
    return <div>Loading...</div>; // Placeholder or loading state
  }

  const { snippet, statistics } = info;

  return (
    <div className='m-2 p-2 w-72 shadow-lg'>
      <img className="rounded-lg w-72" alt="video" src={snippet.thumbnails.medium.url} />
      <ul>
        <li className='font-bold '>{snippet.title}</li>
        <li>{snippet.channelTitle}</li>
        <li>{statistics.viewCount}</li>
      </ul>
    </div>
  );
};
