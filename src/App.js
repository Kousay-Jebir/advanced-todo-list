import TaskForm from "./components/list-section/TaskForm";
import { useState } from "react";
import toDoTasksContext from "./contexts/toDoTasksContext";
import "./index.css";
import DashBoardContainer from "./components/dashboard-section/DashBoardContainer";
import NewUser from "./components/NewUser";
import UserDataProvider from "./components/UserDataProvider";
import { loggedInUser } from "./userData";
function App() {
  console.log(sessionStorage);
  function isNewUser() {
    if (sessionStorage.getItem('profiles') == null) {
      window.scrollTo(0, 0);
      document.body.classList.add('noScroll');
      return (true);
    }
  }
  //dummy tasks
  const [toDoTasks, setToDoTasks] = useState([
    { value: "Task 1 ", isChecked: false },
    { value: "Task 2 ", isChecked: false },
    { value: "Task 3 ", isChecked: false }
  ]);
  const [counter, setCounter] = useState(0);
  const [overlayActive, setOverlayActive] = useState(isNewUser());
  const [makeNewProfile, setMakeNewProfile] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const profiles = JSON.parse(sessionStorage.getItem("profiles"));
  const [isProfileSelected, setIsProfileSelected] = useState(false);
  const [reEvaluateGraph, setReEvaluateGraph] = useState(false);
  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };
  return (
    <UserDataProvider>
      <toDoTasksContext.Provider value={{ toDoTasks, setToDoTasks, counter, setCounter, setMakeNewProfile, setOverlayActive, setSelectedProfile, selectedProfile, profiles, isProfileSelected, setIsProfileSelected, reEvaluateGraph, setReEvaluateGraph }}>
        <div className="App">
          {overlayActive ? <div className="overlay"></div> : null}
          <TaskForm></TaskForm>
          <DashBoardContainer></DashBoardContainer>
          {(isNewUser() || makeNewProfile) ? <NewUser overlay={toggleOverlay}></NewUser> : null}
        </div>
      </toDoTasksContext.Provider>
    </UserDataProvider>
  );
}

export default App;
