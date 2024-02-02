import { useContext, useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import "./NewUser.css";
import toDoTasksContext from "../contexts/toDoTasksContext";
import { logOutCurrentUser, loggedInUser } from "../userData";

const NewUser = (props) => {
    const { setMakeNewProfile } = useContext(toDoTasksContext);
    const [profileImage, setProfileImage] = useState("/profilepic.jpg");
    const [profileName, setProfileName] = useState("");
    const newProfile = { profileName, profileImage, isLoggedIn: true, toDoLists: [] };
    const profileImageInputRef = useRef(null);

    const compressImage = async (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                const img = new Image();
                img.src = event.target.result;
                img.onload = () => {
                    const canvas = document.createElement('canvas');
                    const ctx = canvas.getContext('2d');

                    // Set the canvas dimensions based on the desired max width and height
                    const maxWidth = 100;
                    const maxHeight = 100;

                    let newWidth = img.width;
                    let newHeight = img.height;

                    if (img.width > maxWidth) {
                        newWidth = maxWidth;
                        newHeight = (img.height * maxWidth) / img.width;
                    }

                    if (newHeight > maxHeight) {
                        newHeight = maxHeight;
                        newWidth = (img.width * maxHeight) / img.height;
                    }

                    canvas.width = newWidth;
                    canvas.height = newHeight;

                    // Draw the image onto the canvas
                    ctx.drawImage(img, 0, 0, newWidth, newHeight);

                    // Convert the canvas content back to a compressed image
                    canvas.toBlob((blob) => {
                        resolve(blob);
                    }, 'image/jpeg', 0.95); // You can adjust the quality here
                };
            };

            // Read the file as a data URL
            reader.readAsDataURL(file);
        });
    };

    const handleImageChange = async (e) => {
        const file = e.target.files[0];
        if (file) {
            const compressedImageBlob = await compressImage(file);
            setProfileImage(URL.createObjectURL(compressedImageBlob));
        }
    };

    const handleImageUpload = (e) => {
        profileImageInputRef.current.click();
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(newProfile);
        const existingProfiles = JSON.parse(localStorage.getItem('profiles')) || [];

        // Add the new profile to the array
        existingProfiles.push(newProfile);

        // Save the updated array back to localStorage
        localStorage.setItem('profiles', JSON.stringify(existingProfiles));
        props.overlay();
        setMakeNewProfile(false);
        document.body.classList.remove("noScroll");
    };

    return (
        <div id="new-user-ui-container">
            <form id="new-user-ui" onSubmit={handleSubmit}>
                <img id="profile-image" src={profileImage} alt="Profile Picture Preview"></img>
                <input
                    required
                    placeholder="Enter profile name"
                    type="text"
                    name="profile-name"
                    id="profile-name"
                    value={profileName}
                    onChange={(e) => setProfileName(e.target.value)}
                />

                <input
                    type="file"
                    name="profile-image"
                    id="profile-image"
                    accept="image/*"
                    style={{ display: 'none' }}
                    onChange={handleImageChange}
                    ref={profileImageInputRef}
                />

                <button type="button" onClick={handleImageUpload}>
                    Upload image
                </button>
                <button type="submit">Save profile</button>
            </form>
        </div>
    );
};

export default NewUser;
