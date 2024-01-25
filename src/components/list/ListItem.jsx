import ListItemCheckBox from "./ListItemCheckBox";
import "./ListItem.css";
import { useContext } from "react";
import toDoTasksContext from "../../contexts/toDoTasksContext";
const ListItem = (props) => {
    const tasks = useContext(toDoTasksContext);
    const taskIndex = props.taskIndex;
    function valueChangeHandler(event) {
        tasks.setToDoTasks((prevTasks) => {
            const newTasks = [...prevTasks];
            newTasks[taskIndex] = { ...newTasks[taskIndex], value: event.target.value };
            return newTasks;
        });
    }
    return (
        <li ><input onChange={valueChangeHandler} value={props.value} type="text" name="" id="" />
            <ListItemCheckBox taskIndex={taskIndex} checked={props.isChecked}></ListItemCheckBox>
        </li>
    )
}
export default ListItem;