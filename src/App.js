import React, { createContext, useEffect, useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export const DeleteHandlerContext = createContext();
export const EditHanlderContext = createContext();

function App() {

  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erorr, setErorr] = useState('');

  // constent for Edit option
  const [editText, setEditedText] = useState('');
  const [editToggle , setEditToggle] = useState(true)

  useEffect(() => {
    fatchingData()
  }, [])

  // fatching data from the server
  const fatchingData = async () => {
    try{
      const res = await fetch('https://cloud-bitter-sidewalk.glitch.me/tasks');
      if(!res.ok) throw new Error('Somthing Was Wrong....')
      const taskArry = await res.json();
      setTasks(taskArry);
      setLoading(false);
    }catch(error){
      setErorr(error.message);
    }
  }

  // Handler for data from server
  const handleDelete = (id) => {
    deleteData(id);

    setTasks(
      tasks.filter((task) => id !== task.id)
    )

  }

  // deleteing data function
  const deleteData = async (id) => {
    await fetch(`https://cloud-bitter-sidewalk.glitch.me/tasks/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": 'application/json'
      }
    })
  }

  // handle-Edit
  const handleEdit = (id) => {
    const [editTergets] = tasks.filter((task) => task.id === id);
    editTergets.isEdit = true;
    setEditedText(editTergets.text);
    setTasks([...tasks]);
    setEditToggle(false)

    // re Arange
    tasks.filter((task) => task.id !== id).map((targetElements) => targetElements.isEdit = false)
  }


  // handleFormSubmitter 
  const handleFormSubmitter = (e, id) => {
    e.preventDefault();

    setEditToggle(!editToggle);

    const editPersistance = {
      text: editText,
      id: id
    }

    puttingData(id, editPersistance);

    // realtime update data
    const [editTergets] = tasks.filter((task) => task.id === id);
    editTergets.isEdit = false;
    editTergets.text = editPersistance.text;
    setTasks([...tasks]);
  }

  const puttingData = async (id, newEditData) => {
    await fetch(`https://cloud-bitter-sidewalk.glitch.me/tasks/${id}`, {
      method: "PUT",
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(newEditData)
    })
  }








  return (
    <div className="wrapper bg-gradient-to-t from-gray-900 to-teal-900 min-h-screen pt-10">
      <div className="container">
        <DeleteHandlerContext.Provider value={handleDelete}>
          <EditHanlderContext.Provider value={handleEdit}>
            <Header></Header>
            <TodoForm taskss={tasks} setTasks={setTasks}></TodoForm>
            <TodoList tasks={tasks} erorr={erorr} handleFormSubmitter={handleFormSubmitter} editText={editText} setEditedText={setEditedText}  loading={loading}></TodoList>
            <Footer></Footer>
          </EditHanlderContext.Provider>
        </DeleteHandlerContext.Provider>
      </div>
    </div>
  );
}

export default App;
