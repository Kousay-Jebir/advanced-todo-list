import ListItemCheckBox from "./ListItemCheckBox";
import "./ListItem.css";
const ListItem = (props) => {
    return (
        <li>{props.value}
            <ListItemCheckBox></ListItemCheckBox>
        </li>
    )
}
export default ListItem;