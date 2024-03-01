/* eslint-disable react/prop-types */
import AddToDo from "./components/AddToDo";
import ToDoItems from "./components/ToDoitems";
import "./App.css";
import { useState } from "react";

function App() {
  let [todoitems, settodoitems] = useState([
    { name: "Complete To DO app project", duedate: "2023-12-25" },
    { name: "Complete React", duedate: "2023-12-25" },
  ]);

  const HandleOnclick = (TaskName, DueDate) => {
    if (!TaskName || TaskName.length === 0) {
      alert("Please Enter the Task");
    } else if (!DueDate || DueDate.length === 0) {
      alert("Please Enter the Due Date");
    } else {
      // const newitems = [...todoitems, { name: TaskName, duedate: DueDate }];
      settodoitems((todoitems) => [
        ...todoitems,
        { name: TaskName, duedate: DueDate },
      ]);
    }
  };

  const HandleOnclickRemove = (TaskName, TaskDate) => {
    const newitems = todoitems.filter(
      (item) => item.name !== TaskName || item.duedate !== TaskDate
    );
    settodoitems(newitems);
  };
  return (
    <center className="Container">
      <div className="AppName">ToDo App</div>
      <AddToDo HandleOnclick={HandleOnclick} />
      <div className="items-container">
        <ToDoItems todoitems={todoitems} OnclickRemove={HandleOnclickRemove} />
      </div>
    </center>
  );
}

export default App;
