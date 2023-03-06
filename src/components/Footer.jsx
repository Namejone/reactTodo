import React from 'react'

const Footer = () => {
  return (
    <footer className='py-7 bg-gray-900 px-8 border-t border-gray-500 rounded-bl-lg rounded-br-lg text-center'>
        <p className='text-primary'>&copy;{new Date().getFullYear()} All rights reserved. TODO App</p>
    </footer>
  )
}

export default Footer