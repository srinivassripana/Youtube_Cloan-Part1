import React from 'react'

export const Buttons = ({ name }) => {
    return (
      <button className="bg-gray-400 text-black text-sm p-1 px-2 m-3 rounded-md font-bold">
        {name}
      </button>
    );
  }
