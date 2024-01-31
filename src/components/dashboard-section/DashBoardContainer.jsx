import "./DashBoardContainer.css";
import Graph from "./graph-section/Graph";
import ProfileCard from "./profile-section/ProfileCard";
import "./graph-section/GraphCard.css"
import { useState } from "react";
import NewUser from "../NewUser";
const DashBoardContainer = () => {

    function newProfileHandler() {


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
                    <button style={{
                        backgroundColor: "#D9D9D9",
                        color: "#424B4B"
                    }}>Manage profiles</button>
                </div>
            </div>
            <div id="graph-section-container">
                <h1>Weekly performance</h1>
                <Graph></Graph>
            </div>
        </section>
    )
}
export default DashBoardContainer;