import { useContext } from "react";
import List from "../list/List";
import "./TaskForm.css";
import toDoTasksContext from "../../contexts/toDoTasksContext";

const TaskForm = () => {
    const tasks = useContext(toDoTasksContext);
    function submitHandler(event) {
        event.preventDefault();
        tasks.setCounter((previous) => previous + 1);
        const currentCounter = tasks.counter + 1; // Use the updated counter value
        sessionStorage.setItem(`toDoList ${currentCounter}`, JSON.stringify(tasks.toDoTasks));
        console.log(sessionStorage);
    }

    return (

        <form onSubmit={submitHandler} method="post">
            <List></List>
            <button type="submit">Submit list</button>
            <button onClick={(event) => {
                event.preventDefault();
                tasks.setToDoTasks([])
            }} type="button">Clear list</button>
        </form>


    )
}
export default TaskForm;