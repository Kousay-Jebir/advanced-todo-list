import TaskForm from "./components/list-section/TaskForm";
import { useState } from "react";
import toDoTasksContext from "./contexts/toDoTasksContext";
import "./index.css";
import DashBoardContainer from "./components/dashboard-section/DashBoardContainer";
import NewUser from "./components/NewUser";
import UserDataProvider from "./components/UserDataProvider";
function App() {
  console.log(sessionStorage);
  function isNewUser() {
    if (sessionStorage.getItem('profiles') == null) {

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
  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };
  return (
    <UserDataProvider>
      <toDoTasksContext.Provider value={{ toDoTasks, setToDoTasks, counter, setCounter, setMakeNewProfile, setOverlayActive }}>
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
