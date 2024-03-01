/* eslint-disable react/prop-types */
import "./Todoitem.css";
import { MdDeleteOutline } from "react-icons/md";
function Todoitem({ TaskName, TaskDate, OnclickRemove }) {
  return (
    <div>
      <div className="row-todo">
        <div className="task">{TaskName}</div>
        <div className="Date">{TaskDate}</div>
        <div className="Bt">
          <button
            type="button"
            className="btn-todo Delete"
            onClick={() => OnclickRemove(TaskName, TaskDate)}
          >
            <MdDeleteOutline />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Todoitem;
