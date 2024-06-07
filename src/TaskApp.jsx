import { useState } from "react"
import { SearchInput,TaskList, ButtonAddTask } from "./components"


export const TaskApp = () => {

  const [tasks, setTasks] = useState([]);
  const [value, setvalue] = useState("")

  const addNewTask = (newTask) => {
    const task = {
      id: Math.floor(Math.random() * 3000),
      title: newTask
    }
    setTasks([task, ...tasks]);
    setvalue("")
  }

  const getValueInput = (newValue) => {
    setvalue(newValue);
  }


  return (
    <>
      <h1 className="title">Task</h1>
      <div className="is-flex is-justify-content-space-between is-align-items-center">

        <SearchInput onNewValue={item => getValueInput(item)} value={value} />

        <ButtonAddTask onAddnewTask={item => addNewTask(item)} newValue={value} />
      </div>
      <TaskList tasks={tasks}></TaskList>
    </>
  )
}
