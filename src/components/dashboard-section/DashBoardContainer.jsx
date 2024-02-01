import "./DashBoardContainer.css";
import Graph from "./graph-section/Graph";
import ProfileCard from "./profile-section/ProfileCard";
import "./graph-section/GraphCard.css"
import { useState } from "react";
import NewUser from "../NewUser";
import { useContext } from "react";
import toDoTasksContext from "../../contexts/toDoTasksContext";
import { logOutCurrentUser } from "../../userData";
import Profiles from "./profile-section/Profiles";
const DashBoardContainer = () => {
    const { setOverlayActive, setMakeNewProfile, setSelectedProfile, setIsProfileSelected } = useContext(toDoTasksContext);
    const [isManageProfilesActive, setIsManageProfileActive] = useState(false);
    function newProfileHandler() {

        window.scrollTo(0, 0);
        document.body.classList.add('noScroll');
        setOverlayActive(true);
        setMakeNewProfile(true);
        setSelectedProfile(0);
        logOutCurrentUser();

    }
    function manageProfilesHandler() {
        setIsManageProfileActive(true);
        setIsProfileSelected(false);
    }
    return (
        <section id="dashboard-section-container">

            <div id="profile-section-container">
                <ProfileCard></ProfileCard>
                <div id="profile-section-buttons">
                    <button onClick={newProfileHandler} style={{
                        backgroundColor: "#0E8388",
                        color: "#CBE4DE"
                    }}>New profile</button>
                    <button onClick={manageProfilesHandler} style={{
                        backgroundColor: "#D9D9D9",
                        color: "#424B4B"
                    }}>Switch profiles</button>
                </div>
                {isManageProfilesActive ? <Profiles></Profiles> : null}
            </div>
            <div id="graph-section-container">
                <h1>Weekly performance</h1>
                <Graph></Graph>
            </div>
        </section>
    )
}
export default DashBoardContainer;