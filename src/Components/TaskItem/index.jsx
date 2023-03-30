import React, { useState } from 'react'

import * as C from './taskItem'

const TaskItem = ({taskCollun, setIsModalOpen, setSelectedTask, addTask, deleteItem}) => {
  const [taskInput, setTaskInput] = useState('')

  const [showInput, setShowInput] = useState(false)

  function addNewTask (e) {
    if(e.key === 'Enter'){
      addTask(taskCollun.id, taskInput)
      setTaskInput('')
      setShowInput(false)
    }

  }

  function itemToDelete (id){
    deleteItem(taskCollun.id, id)
  }

  function trasferItem (task) {
    setSelectedTask(task)
    itemToDelete(task.id)
    setIsModalOpen(true)
  }


  return (
    <C.Container hex={taskCollun.hex}>
      <C.FormContainer>
        <h2>{taskCollun.name}</h2>
        {showInput && <C.Input
          type='text'
          placeholder='Digite sua tarefa'
          value={taskInput}
          onChange={e => setTaskInput(e.target.value)}
          onKeyDown={addNewTask}
        />}
          {taskCollun.tasks.map((task) => (
            <C.TaskContainer key={Math.floor(Math.random() * 1000)}>
                <p>{task.content}</p>
                <C.ControlsContainer>
                  <button onClick={() => itemToDelete(task.id)}>
                    X
                  </button>
                  <button onClick={() => trasferItem(task)}>E</button>
                </C.ControlsContainer>
            </C.TaskContainer>
          ))}
      </C.FormContainer>
      <C.AddButton onClick={() => setShowInput(true)}>Adicionar tarefa</C.AddButton>
    </C.Container>
  )
}

export default TaskItem
