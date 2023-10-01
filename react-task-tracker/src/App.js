import Header from "./Components/Header";
import Tasks from "./Components/Tasks";
import { useState , useEffect } from 'react';
import AddTask from "./Components/AddTask";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([{"id": 1,
  "text": "Doctors Appointment",
  "day": "Feb 5th at 2:30 pm",
  "reminder": true},
  {
      "id": 2, 
      "text": "Meeting at School" ,
      "day": "Feb 6th at 1:30 pm" ,
      "reminder": true 
  },
  {
    "id":3,
    "text":"Food Shopping",
    "day": "Feb 5th at 2:30 pm",
    "reminder": false 
  }
])

 /* useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }

    getTasks()
  }, [])
  
  // fetch tasks

  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()
  
    return data
  } */
  
    // Add Task
    
     const addTask=(task) => {
      const id = Math.floor(Math.random() * 10000)+1
      
      const newTask ={ id, ...task }
      setTasks([...tasks, newTask])
      } 
  
    //  Delete Task
    const deletetask = (id) =>{
      setTasks(tasks.filter( (task) => task.id !== id ))
    }

    const toggleReminder = (id) => {
    
      setTasks(
        tasks.map((task)  => 
        task.id === id ? {...task, reminder: !task.reminder} : task)
      )
    }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>

      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deletetask} onToggle={toggleReminder} /  > : 'No Tasks To Show' }
    
    </div>
  )
}

export default App
