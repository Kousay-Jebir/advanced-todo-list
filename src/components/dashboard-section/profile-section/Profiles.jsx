import { useContext, useState } from "react";
import { logInUser, logOutCurrentUser, loggedInUser } from "../../../userData";
import MiniProfile from "./MiniProfile";
import "./Profiles.css"
import toDoTasksContext from "../../../contexts/toDoTasksContext";
const Profiles = () => {
    const { setSelectedProfile, isProfileSelected, setIsProfileSelected } = useContext(toDoTasksContext);

    const getProfiles = () => {
        return (
            JSON.parse(localStorage.getItem('profiles'))
        )
    };
    const sendIndex = (selectedProfile) => {
        //switch profiles 

        setSelectedProfile(selectedProfile);
        console.log(selectedProfile);
        logOutCurrentUser();
        logInUser(selectedProfile);

        // Update state to indicate that a profile is selected
        setIsProfileSelected(true);
    };
    return (
        !isProfileSelected ? <div id="profiles-list">
            {getProfiles().map((profile, index) => { return (<MiniProfile key={Math.random()} profileName={profile.profileName} profileImage={profile.profileImage} index={index} sendIndex={sendIndex} ></MiniProfile>) })}
        </div> : <></>

    );
}
export default Profiles;