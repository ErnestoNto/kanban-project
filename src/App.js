import React, { useState } from 'react'
import CollunCreator from './Components/CollunCreator'
import Header from './Components/Header'
import TaskItem from './Components/TaskItem'
import Modal from './Components/Modal'
import { initialColluns } from './data'

const App = () => {
  const [taskList, setTaskList] = useState(initialColluns)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedTask, setSelectedTask] = useState({})

  function createCollun () {
    const newCollun = {
      name: `Coluna ${taskList.length + 1}`,
      id: taskList.length + 1,
      hex: '#826C7F',
      tasks: []
    }

    setTaskList([...taskList, newCollun]);
  }

  function addTask(columnId, taskInput) {
    const column = taskList.find(column => column.id === columnId);
    if (!column) {
      console.error(`Column with id ${columnId} not found`);
      return;
    }
  
    const newTask = {
      id: Math.floor(Math.random() * 1000),
      content: taskInput
    }
  
    const updatedColumn = { ...column, tasks: [...column.tasks, newTask] };
    const updatedTaskList = taskList.map(column => {
      if (column.id === columnId) {
        return updatedColumn;
      } else {
        return column;
      }
    });
  
    setTaskList(updatedTaskList);
  }
  
  function deleteItem (columnId, ID) {
    const column = taskList.find(column => column.id === columnId);

    const newArray = column.tasks.filter(task => task.id !== ID)

    console.log(newArray);

    const updatedColumn = { ...column, tasks: newArray };

    const updatedTaskList = taskList.map(column => {
      if (column.id === columnId) {
        return updatedColumn;
      } else {
        return column;
      }
    });
  
    setTaskList(updatedTaskList);
  }


  return (
    <div>
      {isModalOpen && 
      <Modal 
        setIsModalOpen={setIsModalOpen} 
        selectedTask={selectedTask} 
        taskList={taskList} 
        setTaskList={setTaskList} 
      />}
      <Header />
      <CollunCreator createCollun={createCollun} />
      <div className='container'>
        {taskList.map(collun => (
        <TaskItem 
          key={collun.id}
          taskCollun={collun} 
          setIsModalOpen={setIsModalOpen} 
          setSelectedTask={setSelectedTask}
          addTask={addTask}
          deleteItem={deleteItem}
        />
        ))}
      </div>
    </div>
  )
}

export default App
