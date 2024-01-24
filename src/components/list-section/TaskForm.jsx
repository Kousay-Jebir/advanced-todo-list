import List from "../list/List";

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