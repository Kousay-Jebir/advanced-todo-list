import { logOutCurrentUser, loggedInUser } from "../../../userData";
import "./MiniProfile.css"
const MiniProfile = ({ profileName, profileImage, index, sendIndex }) => {
    function switchProfileHandler() {
        sendIndex(index);
    }

    return (
        <button onClick={switchProfileHandler} className="mini-profile">
            <img src={profileImage} alt="" />
            <div>{profileName}</div>
        </button>
    );
}
export default MiniProfile;