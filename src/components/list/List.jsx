import ListItem from "./ListItem";
import "./List.css";
import { useContext } from "react";
import toDoTasksContext from "../../contexts/toDoTasksContext";
import { useEffect } from "react";

const List = (props) => {
    const tasks = useContext(toDoTasksContext) //tasks object
    // useEffect(() => { console.log(tasks.toDoTasks) }, [tasks.toDoTasks]); //for debugging purpose
    function addListItemHandler(event) {
        event.preventDefault();
        const newTasks = [...tasks.toDoTasks, { value: "", isChecked: false }];
        tasks.setToDoTasks(newTasks);
    }

    function toDoTasksComponents(tasks) {
        const toDoTasksDOM = tasks.map((task, i) => (<ListItem taskIndex={i} value={task.value} isChecked={task.isChecked} key={i}></ListItem>))
        return toDoTasksDOM;
    }

    return (
        <ul>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>To do list</h1>

            {toDoTasksComponents(tasks.toDoTasks)}

            <button onClick={addListItemHandler} id="add-list-item">

                Add a new task
            </button>

        </ul>
    )
}
export default List;