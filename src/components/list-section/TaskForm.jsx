import { useContext } from "react";
import List from "../list/List";
import "./TaskForm.css";
import toDoTasksContext from "../../contexts/toDoTasksContext";
const TaskForm = () => {
    const tasks = useContext(toDoTasksContext);
    function submitHandler(event) {
        event.preventDefault();
    }
    return (

        <form onSubmit={submitHandler} method="post">
            <List></List>
            <button type="submit">Submit list</button>
            <button onClick={() => tasks.setToDoTasks([])} type="button">Clear list</button>
        </form>


    )
}
export default TaskForm;