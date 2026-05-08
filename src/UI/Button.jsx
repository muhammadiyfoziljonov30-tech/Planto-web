import React from 'react'

export default function Button({children, className}) {
  return (
    <div>
        <button className={`py-3.5 px-15 border boreder-white text-white rounded-xl  ${className} cursor-pointer`}>
            {children}
        </button>
    </div>
  )
}
