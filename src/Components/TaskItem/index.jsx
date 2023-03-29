import React, { useState } from 'react'

import * as C from './taskItem'

const TaskItem = ({taskCollun, setTaskList}) => {
  const [taskInput, setTaskInput] = useState('')

  const [showInput, setShowInput] = useState(false)

  function addTask (e) {
    if(e.key === 'Enter'){
      setTaskInput(taskCollun.tasks.unshift(taskInput))
      setTaskInput('')
      setShowInput(false)
    }
  }

  function deleteItem (i) {
    setTaskInput(taskCollun.tasks.splice(i, 1))
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
          onKeyDown={addTask}
        />}
          {taskCollun.tasks.map((task, i) => (
            <C.TaskContainer key={taskCollun.id}>
                <p>{task}</p>
                <C.ControlsContainer>
                  <button onClick={() => deleteItem(i)}>
                    X
                  </button>
                  <button>E</button>
                </C.ControlsContainer>
            </C.TaskContainer>
          ))}
      </C.FormContainer>
      <C.AddButton onClick={() => setShowInput(true)}>Adicionar tarefa</C.AddButton>
    </C.Container>
  )
}

export default TaskItem
