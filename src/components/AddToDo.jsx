/* eslint-disable react/prop-types */
import "./Todoitem.css";
import { useRef } from "react";
import { BiMessageSquareAdd } from "react-icons/bi";

function AddToDo({ HandleOnclick }) {
  // let [DueDate, setDueDate] = useState("");
  // let [TaskName, setTaskName] = useState("");
  let NameRef = useRef("");
  let DueRef = useRef("");
  // const HandleOnchangeTask = (event) => {
  //   console.log(event.target.value);
  //   setTaskName(event.target.value);
  // };
  // const HandleOnchangeDate = (event) => {
  //   console.log(event.target.value);
  //   setDueDate(event.target.value);
  // };

  const OnSubmitted = (event) => {
    event.preventDefault();
    // console.log(event);
    const TaskName = NameRef.current.value;
    const DueDate = DueRef.current.value;
    NameRef.current.value = "";
    DueRef.current.value = "";
    HandleOnclick(TaskName, DueDate);
    // setDueDate("");
    // setTaskName("");
  };

  return (
    <div>
      <form className="row row-todo" id="form" onSubmit={OnSubmitted}>
        <div className="col-6">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your task"
            ref={NameRef}
            // value={TaskName}
            // onChange={HandleOnchangeTask}
          />
        </div>
        <div className="col-4">
          <input
            type="date"
            className="form-control"
            name="date"
            id="date"
            // key={DueDate + TaskName}
            ref={DueRef}
            // value={DueDate}
            // onChange={HandleOnchangeDate}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn-todo Add">
            <BiMessageSquareAdd />
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
