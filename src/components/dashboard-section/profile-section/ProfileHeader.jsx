import { useContext } from "react";
import userDataContext from "../../../contexts/userDataContext";

const ProfileHeader = () => {
    const userprofiles = useContext(userDataContext)
    const profilesString = sessionStorage.getItem('profiles');

    // Parse the profiles string into an array of profile objects
    const profiles = JSON.parse(profilesString);

    return (
        <header>
            <img src={sessionStorage.getItem('profiles') == null ? "#" : profiles[0].profileImage} alt="profile-picture" />
            <div id="profile-info">
                <h1>{sessionStorage.getItem('profiles') == null ? "profile name" : profiles[0].profileName}</h1>
                <div id="profile-id">#0012</div>
                <button type="button">Profile settings</button>
            </div>
        </header>
    )
}
export default ProfileHeader;