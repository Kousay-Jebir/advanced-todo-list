import ListItemCheckBox from "./ListItemCheckBox";

const ListItem = () => {
    return (
        <li>{props.value}
            <ListItemCheckBox></ListItemCheckBox>
        </li>
    )
}
export default ListItem;