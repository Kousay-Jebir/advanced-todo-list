import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewUser.css";
import toDoTasksContext from "../contexts/toDoTasksContext";
import UserDataProvider from "./UserDataProvider";
const NewUser = (props) => {

    const [profileImage, setProfileImage] = useState("/profilepic.jpg");
    const [profileName, setProfileName] = useState("");
    const newProfile = { profileName, profileImage, isLoggedIn: true, toDoLists: [] };
    const profileImageInputRef = useRef(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setProfileImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };
    const handleImageUpload = (e) => {
        profileImageInputRef.current.click();
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newProfile);
        const existingProfiles = JSON.parse(sessionStorage.getItem('profiles')) || [];

        // Add the new profile to the array
        existingProfiles.push(newProfile);

        // Save the updated array back to sessionStorage
        sessionStorage.setItem('profiles', JSON.stringify(existingProfiles));
        props.overlay();


    };

    return (

        <div id="new-user-ui-container">
            <form id="new-user-ui" onSubmit={handleSubmit} >
                <img id="profile-image" src={profileImage} alt="Profile Picture Preview"></img>
                <input required placeholder="Enter profile name" type="text" name="profile-name" id="profile-name" value={profileName} onChange={(e) => setProfileName(e.target.value)} />

                <input type="file" name="profile-image" id="profile-image" accept="image/*" style={{ display: 'none' }} onChange={handleImageChange} ref={profileImageInputRef} />


                <button type="button" onClick={handleImageUpload}>Upload image</button>
                <button type="submit">Save profile</button>


            </form >
        </div>

    )
}
export default NewUser;

