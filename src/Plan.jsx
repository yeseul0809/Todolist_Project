import React from "react";
import "./Plan.css";

const Plan = ({ plan, deleteUserHandler, completedHandler }) => {
  const { title, body, id, isDone } = plan;
  const squareClass = isDone ? "squareDone" : "square";
  const doneButtonClass = isDone ? "buttonDone" : "buttonWorking";

  return (
    <div className={squareClass}>
      <div className="content-wrapper">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
      <div className="twoButton">
        <button
          className={doneButtonClass}
          onClick={() => deleteUserHandler(id)}
        >
          삭제
        </button>
        <button
          className={doneButtonClass}
          onClick={() => completedHandler(id)}
        >
          {" "}
          {plan.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Plan;
