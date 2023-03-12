import React, { useState } from 'react'

function TodoForm({taskss, setTasks}) {

  const [task, setTask] = useState('');

  // onsubmit form handler
  const onSubmitHander = (e) => {
    e.preventDefault();
    setTask('');

    postinData(task);
  }

  // posting data in live server
  const postinData = async (text) => {
    const res = await fetch('https://cloud-bitter-sidewalk.glitch.me/tasks', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({ text })
    })

    const data = await res.json();
    setTasks([...taskss, data]);

  }








  return (
    <div className='py-10 bg-gray-900 px-8'>
        <form onSubmit={onSubmitHander} className='flex items-center justify-between gap-5'>
            <input onChange={(e) => setTask(e.target.value)} value={task} required type="text" placeholder='Type Your Task' className='h-10 w-7/12 text-primary text-lg px-0 bg-transparent border-b border-primary focus:outline-none'/>
            <button type='submit' className='px-5 py-2 text-gray-700 bg-primary font-semibold'>Add Task</button>
        </form>
    </div>
  )
}

export default TodoForm