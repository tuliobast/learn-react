import React from 'react'

export default function Button({text, onButtonClick}) {
  return (
    <button className='mt-4 px-4 py-2 text-2xl bg-blue-500 text-white rounded hover:bg-blue-700 transition duration-300' 
      onClick={onButtonClick}>
        {text}
    </button>
  )
}
