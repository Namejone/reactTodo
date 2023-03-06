import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import React from 'react'

function TodoItem() {
  return (
    <div className="px-8 py-5 bg-gray-900">
        <div className='flex items-start justify-between rounded-sm bg-gray-800 text-white py-4 px-4 mb-4'>
            <div className="flex gap-3 items-center w-8/12">
                <input type="checkbox" className="bg-teal-700"/>
                <span className='text-primary text-lg'>Lorem ipsum dolor sit.</span>
            </div>

            <div className="flex items-center gap-3 pt-1">
                <button type='button' className='text-primary text-xl bg-transparent p-0'><HiPencilAlt /></button>
                <button type='button' className='text-primary text-xl bg-transparent p-0'><HiOutlineTrash /></button>
            </div>
        </div>
       

    </div>
  )
}

export default TodoItem