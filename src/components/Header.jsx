import React from 'react'
import { HiDocumentText } from "react-icons/hi";


const Header = () => {
  return (
    <header className='py-8 bg-gray-900 px-8 border-b border-gray-500 rounded-tl-lg rounded-tr-lg'>
        <h2 className='text-primary text-xl uppercase flex items-center gap-3'>
            <span><HiDocumentText/></span>
            <span className='font-medium  tracking-wider'>React Todo App</span>
        </h2>
    </header>
  )
}

export default Header