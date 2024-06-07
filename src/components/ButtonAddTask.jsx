


export const ButtonAddTask = ({ onAddnewTask, newValue }) => {

    const addnewTask = () => {
        onAddnewTask(newValue)
    }

    return (
        <button className="button is-success has-text-white" onClick={addnewTask}>Add new task</button>
    )
}
