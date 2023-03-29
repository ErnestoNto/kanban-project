import React, { useState } from 'react'
import CollunCreator from './Components/CollunCreator'
import Header from './Components/Header'
import TaskItem from './Components/TaskItem'
import { initialColluns } from './data'

const App = () => {
  const [taskList, setTaskList] = useState(initialColluns)

  function createCollun () {
    const newCollun = {
      name: `Coluna ${taskList.length + 1}`,
      id: taskList.length + 1,
      hex: '#826C7F',
      tasks: []
    }

    setTaskList([...taskList, newCollun]);
  }

  return (
    <div>
      <Header />
      <CollunCreator createCollun={createCollun} />
      <div className='container'>
        {taskList.map(collun => (
        <TaskItem key={collun.id} taskCollun={collun} setTaskList={setTaskList} />
        ))}
      </div>
    </div>
  )
}

export default App
