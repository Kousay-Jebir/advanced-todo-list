import { useContext } from "react";
import { logOutCurrentUser, loggedInUser } from "../../../userData";
import "./MiniProfile.css"
import toDoTasksContext from "../../../contexts/toDoTasksContext";
const MiniProfile = ({ profileName, profileImage, index, sendIndex }) => {
    const { setReEvaluateGraph } = useContext(toDoTasksContext);
    function switchProfileHandler() {
        sendIndex(index);
        setReEvaluateGraph((prev) => { return !prev });
    }

    return (
        <button onClick={switchProfileHandler} className="mini-profile">
            <img src={profileImage} alt="" />
            <div>{profileName}</div>
        </button>
    );
}
export default MiniProfile;