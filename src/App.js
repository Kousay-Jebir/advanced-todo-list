import TaskForm from "./components/list-section/TaskForm";
import { useState } from "react";
import toDoTasksContext from "./contexts/toDoTasksContext";
import "./index.css";
import DashBoardContainer from "./components/dashboard-section/DashBoardContainer";
import NewUser from "./components/NewUser";
function App() {
  console.log(sessionStorage);
  function isNewUser() {
    if (sessionStorage.getItem('profiles') == null) {
      console.log("ture")
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
  const [overlayActive, setOverlayActive] = useState(true);

  const toggleOverlay = () => {
    setOverlayActive(!overlayActive);
  };
  return (
    <toDoTasksContext.Provider value={{ toDoTasks, setToDoTasks, counter, setCounter }}>
      <div className="App">
        {overlayActive ? <div className="overlay"></div> : null}
        <TaskForm></TaskForm>
        <DashBoardContainer></DashBoardContainer>
        {isNewUser() ? <NewUser overlay={toggleOverlay}></NewUser> : null}
      </div>
    </toDoTasksContext.Provider>
  );
}

export default App;
