import React from 'react'

function TodoForm() {
  return (
    <div className='py-10 bg-gray-900 px-8'>
        <form action="" className='flex items-center justify-between gap-5'>
            <input type="text" placeholder='Type Your Task' className='h-10 w-7/12 text-primary text-lg px-0 bg-transparent border-b border-primary focus:outline-none'/>
            <button type='submit' className='px-5 py-2 text-gray-700 bg-primary font-semibold'>Add Task</button>
        </form>
    </div>
  )
}

export default TodoForm