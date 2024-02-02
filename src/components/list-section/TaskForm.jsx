import { useContext, useState } from "react";
import List from "../list/List";
import "./TaskForm.css";
import toDoTasksContext from "../../contexts/toDoTasksContext";
import { loggedInUser } from "../../userData";
import { useEffect } from "react";
const TaskForm = () => {
    const tasks = useContext(toDoTasksContext);
    const [canSubmit, setCanSubmit] = useState(true);
    const [didHitSubmit, setDidHitSubmit] = useState(false);
    useEffect(() => {
        setCanSubmit(true);
        // Check if 24 hours have passed since the last submission
        // const lastSubmissionTime = localStorage.getItem('lastSubmissionTime');
        const profilesData = JSON.parse(localStorage.getItem('profiles')) || [];
        const lastSubmitTime = profilesData[loggedInUser()]?.lastSubmissionTime || null;
        console.log("effect is ran");

        if (lastSubmitTime) {
            const twentyFourHoursInMilliseconds = 0.1 * 1000;
            const currentTime = new Date().getTime();
            const timeDifference = currentTime - parseInt(lastSubmitTime, 10);

            setCanSubmit(timeDifference >= twentyFourHoursInMilliseconds);

        }
        setDidHitSubmit(false);
    }, [tasks.selectedProfile, didHitSubmit, canSubmit]); // Run this effect only once on component mount


    function submitHandler(event) {

        setDidHitSubmit(true);
        event.preventDefault();
        if (canSubmit) {

            tasks.setCounter((previous) => previous + 1);
            const currentCounter = tasks.counter + 1;

            const loggedUser = loggedInUser();

            // Retrieve the profiles array from sessionStorage
            const profiles = JSON.parse(localStorage.getItem("profiles"));

            // Ensure that the profiles array exists
            if (profiles && profiles.length > loggedUser) {
                const user = profiles[loggedUser];
                // Check if there are already 7 to-do lists
                if (user.toDoLists.length >= 7) {
                    // Clear the to-do list array
                    user.toDoLists = [];
                }

                // Update the user's toDoLists array
                user.toDoLists.push({ [`toDoList ${currentCounter}`]: tasks.toDoTasks });

                // Update the user object in the profiles array
                profiles[loggedUser] = user;

                // Store the updated profiles array back in sessionStorage
                localStorage.setItem('profiles', JSON.stringify(profiles));

                // Save the current time as the last submission time
                const currentTime = new Date().getTime();
                const currentProfiles = JSON.parse(localStorage.getItem("profiles"));
                currentProfiles[loggedInUser()].lastSubmissionTime = currentTime.toString();
                localStorage.setItem('profiles', JSON.stringify(currentProfiles));
                // Disable submission for 24 hours
                setCanSubmit(false);
            } else {
                console.error("User not found or profiles array is invalid.");

            }
        }
        else {
            window.alert("You already submitted your list for today !");
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
