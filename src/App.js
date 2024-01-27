import TaskForm from "./components/list-section/TaskForm";
import { useState } from "react";
import toDoTasksContext from "./contexts/toDoTasksContext";
import "./index.css";
import DashBoardContainer from "./components/dashboard-section/DashBoardContainer";
function App() {
  //dummy tasks
  const [toDoTasks, setToDoTasks] = useState([
    { value: "Task 1 ", isChecked: false },
    { value: "Task 2 ", isChecked: false },
    { value: "Task 3 ", isChecked: false }
  ]);
  return (
    <toDoTasksContext.Provider value={{ toDoTasks, setToDoTasks }}>
      <div className="App">
        <TaskForm></TaskForm>
        <DashBoardContainer></DashBoardContainer>
      </div>
    </toDoTasksContext.Provider>
  );
}

export default App;
