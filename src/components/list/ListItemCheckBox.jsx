import { useContext } from "react";
import toDoTasksContext from "../../contexts/toDoTasksContext";

const ListItemCheckBox = (props) => {
    const tasks = useContext(toDoTasksContext);
    const taskIndex = props.taskIndex;
    function checkBoxHandler(event) {
        tasks.setToDoTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            newTasks[taskIndex] = { ...newTasks[taskIndex], isChecked: event.target.checked };
            return newTasks;
        });
    }
    return (
        <input onChange={checkBoxHandler} checked={props.isChecked} type="checkbox" name="" id="" />
    )
}
export default ListItemCheckBox;