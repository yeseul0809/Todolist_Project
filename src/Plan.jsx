import React from "react";
import "./Plan.css";

const Plan = ({ plan, deleteUserHandler, completedHandler }) => {
  const { title, body, id } = plan;

  return (
    <div className="square">
      <div className="content-wrapper">
        <p className="title">{title}</p>
        <p className="body">{body}</p>
      </div>
      <div className="twoButton">
        <button onClick={() => deleteUserHandler(id)}>삭제</button>
        <button onClick={() => completedHandler(id)}>
          {" "}
          {plan.isDone ? "취소" : "완료"}
        </button>
      </div>
    </div>
  );
};

export default Plan;
