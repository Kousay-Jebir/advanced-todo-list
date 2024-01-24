import ListItem from "./ListItem";
import "./List.css";

const List = () => {
    return (
        <ul>
            <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>To do list</h1>
            <ListItem value="Task 1"></ListItem>
            <ListItem value="Task 2"></ListItem>
            <ListItem value="Task 3"></ListItem>
            <button id="add-list-item">

                Add a new task
            </button>

        </ul>
    )
}
export default List;