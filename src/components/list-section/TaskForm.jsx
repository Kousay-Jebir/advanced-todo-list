import { useContext } from "react";
import List from "../list/List";
import "./TaskForm.css";
import toDoTasksContext from "../../contexts/toDoTasksContext";
import { loggedInUser } from "../../userData";
const TaskForm = () => {
    const tasks = useContext(toDoTasksContext);
    function submitHandler(event) {
        event.preventDefault();
        tasks.setCounter((previous) => previous + 1);
        const currentCounter = tasks.counter + 1;

        const loggedUser = loggedInUser();

        // Retrieve the profiles array from sessionStorage
        const profiles = JSON.parse(sessionStorage.getItem('profiles'));

        // Ensure that the profiles array exists
        if (profiles && profiles.length > loggedUser) {
            const user = profiles[loggedUser];

            // Update the user's toDoLists array
            user.toDoLists.push({ [`toDoList ${currentCounter}`]: tasks.toDoTasks });

            // Update the user object in the profiles array
            profiles[loggedUser] = user;

            // Store the updated profiles array back in sessionStorage
            sessionStorage.setItem('profiles', JSON.stringify(profiles));
        } else {
            console.error("User not found or profiles array is invalid.");
        }
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
