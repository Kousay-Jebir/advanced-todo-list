import List from "../list/List";
import "./TaskForm.css";
const TaskForm = () => {
    return (

        <form method="post">
            <List></List>
            <button type="submit">Submit list</button>
            <button type="reset">Clear list</button>
        </form>


    )
}
export default TaskForm;