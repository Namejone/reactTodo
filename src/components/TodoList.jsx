import React from 'react'
import TodoItem from './TodoItem'
function TodoList({ tasks, erorr, loading, handleFormSubmitter, editText, setEditedText }) {

  return (
    <>
        <div className="py-5 bg-gray-900">
          {
            loading ? <p className='text-center text-white text-xl font-medium'>{erorr ? erorr : 'Loadding...'}</p> : tasks.length === 0 && <p className='text-center text-white text-xl font-medium'>No tasks to show</p>
          }
            {
                tasks.map((task) => (
                    <TodoItem task={task} key={task.id} handleFormSubmitter={handleFormSubmitter} editText={editText} setEditedText={setEditedText}></TodoItem>
                ))
            }
            
        </div>
    </>
  )
}

export default TodoList