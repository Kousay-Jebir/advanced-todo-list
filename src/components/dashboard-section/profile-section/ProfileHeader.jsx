import { useContext, useEffect } from "react";
import userDataContext from "../../../contexts/userDataContext";
import { loggedInUser } from "../../../userData";
import toDoTasksContext from "../../../contexts/toDoTasksContext";
import SubmissionTimer from "./SubmissionTimer";

const ProfileHeader = () => {
    const { selectedProfile, profiles } = useContext(toDoTasksContext);

    return (
        <header>
            <img src={sessionStorage.getItem('profiles') == null ? "#" : profiles[loggedInUser()].profileImage} alt="profile-picture" />
            <div id="profile-info">
                <h1>{sessionStorage.getItem('profiles') == null ? "profile name" : profiles[loggedInUser()].profileName}</h1>
                <div id="profile-id">#0012</div>
                <button id='profile-settings' type="button">Profile settings</button>
            </div>
            <SubmissionTimer></SubmissionTimer>
        </header>
    )
}
export default ProfileHeader;