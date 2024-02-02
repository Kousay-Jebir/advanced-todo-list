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
import { loggedInUser } from "../../userData";
const DashBoardContainer = () => {
    const { setOverlayActive, setMakeNewProfile, setSelectedProfile, setIsProfileSelected } = useContext(toDoTasksContext);
    const [generateGraph, setGenerateGraph] = useState(false);
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
    function generateGraphHandler() {
        //check if the user has 7 to Do lists to show his graph
        const user = loggedInUser();
        let userToDoLists = (JSON.parse(localStorage.getItem('profiles'))[user].toDoLists)
        console.log(Object.values(userToDoLists));
        if (userToDoLists.length < 7) {
            window.alert("You need to submit 7 to do tasks");
        }
        else {
            setGenerateGraph(true);
        }
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
                <h1 style={{ marginBottom: '1rem' }}>Weekly performance</h1>
                <button className="generate-graph" onClick={generateGraphHandler}>Generate Graph</button>
                {generateGraph ? <Graph generate={setGenerateGraph} ></Graph> : null}

            </div>
        </section>
    )
}
export default DashBoardContainer;