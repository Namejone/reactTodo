import { HiPencilAlt, HiOutlineTrash } from "react-icons/hi";
import React, { useContext } from 'react'
import { DeleteHandlerContext, EditHanlderContext } from "../App";

function TodoItem({ task, editText, handleFormSubmitter, setEditedText }) {

  const handleDelete = useContext(DeleteHandlerContext);  
  const handleEdit = useContext(EditHanlderContext);



  return (
    <div className="px-8 bg-gray-900">
        <div className='flex items-start justify-between rounded-sm bg-gray-800 text-white py-4 px-4 mb-2'>
            <div className="flex gap-3 items-center w-8/12">
                {
                  task.isEdit && (
                    <form action="" onSubmit={(e) => handleFormSubmitter(e, task.id)}>
                      <input type="text" value={editText} onChange={(e) => setEditedText(e.target.value)} required className=" bg-transparent outline-none border-b border-primary pb-1"/>
                    </form>
                  )
                }

                {
                  !task.isEdit && (
                    <span className='text-primary text-lg'>{task.text}</span>
                  )
                }


            </div>

            <div className="flex items-center gap-3 pt-1">
                <button type='button' onClick={() => handleEdit(task.id)} className='text-primary text-xl bg-transparent p-0'><HiPencilAlt /></button>
                <button type='button' onClick={() => handleDelete(task.id)} className='text-primary text-xl bg-transparent p-0'><HiOutlineTrash /></button>
            </div>
        </div>
       

    </div>
  )
}

export default TodoItem