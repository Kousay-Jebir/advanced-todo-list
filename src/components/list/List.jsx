import ListItem from "./ListItem";

const List = () => {
    return (
        <ul>
            <h1>To do list</h1>
            <ListItem value="Task 1"></ListItem>
            <ListItem value="Task 2"></ListItem>
            <ListItem value="Task 3"></ListItem>
            <TODO>Button for adding new task</TODO>
        </ul>
    )
}
export default List;