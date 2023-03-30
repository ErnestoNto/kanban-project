import React from 'react'

import * as C from './Modal'

const Modal = ({setIsModalOpen, selectedTask, taskList, setTaskList}) => {

  function handleUpdater (collun) {
    console.log(collun);
    console.log(selectedTask);

    const updatedColumn = {...collun, tasks: [...collun.tasks, selectedTask]}

    const updateTaskList = taskList.map(item => {
      if(item.id === collun.id){
        return updatedColumn
      }else{
        return item
      }
    })

    setTaskList(updateTaskList)
    setIsModalOpen(false)

    // setTaskList({...taskList}, {...collun, tasks: [...collun.tasks, selectedTask]})
    // return {...collun, tasks: [...collun.tasks, selectedTask]}
  }


  return (
    <div>
      <C.ModalContainer onClick={() => setIsModalOpen(false)} />
        <C.Modal>
          {taskList.map(collun => (
            <C.Button key={collun.id} hex={collun.hex} onClick={() => handleUpdater(collun)}>{collun.name}</C.Button>
          ))}
        </C.Modal>
    </div>
  )
}

export default Modal
