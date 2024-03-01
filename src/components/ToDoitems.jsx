/* eslint-disable react/prop-types */

import Todoitem from "./Todoitem";
function ToDoItems({ todoitems, OnclickRemove }) {
  return (
    <div>
      {todoitems.map((item) => (
        <Todoitem
          key={item.name + item.duedate}
          TaskName={item.name}
          TaskDate={item.duedate}
          OnclickRemove={OnclickRemove}
        ></Todoitem>
      ))}
    </div>
  );
}

export default ToDoItems;
