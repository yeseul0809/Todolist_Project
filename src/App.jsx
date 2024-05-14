import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import React from "react";

const App = () => {
  const inputStyle = {
    backgroundColor: "lightblue",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "20px",
  };

  const planStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridGap: "20px",
  };

  const [plans, setPlan] = useState([
    { id: 0, title: "", body: "", isDone: false },
  ]);
  // useState([]); // 젤 처음에는 계획리스트에 아무것도 없게 초기값[]

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // plans 객체 추가
  const onSubmitHandler = (event) => {
    event.preventDefault();
    const newPlan = {
      id: new Date().getTime() + 1,
      title: title,
      body: body,
      isDone: false,
    };

    // 계획리스트 추가.
    setPlan([...plans, newPlan]);

    // 입력칸 빈칸으로 만들기
    setTitle("");
    setBody("");
  };

  // 삭제 컴포넌트
  const deleteUserHandler = (id) => {
    const deletedPlans = plans.filter(function (plan) {
      return plan.id != id;
    });

    setPlan(deletedPlans);
  };

  return (
    <>
      <header>
        <h1>My Todo List</h1>

        <form style={inputStyle} onSubmit={onSubmitHandler}>
          <p>제목</p>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <p>내용</p>
          <input
            type="text"
            value={body}
            onChange={(e) => setBody(e.target.value)}
          />
          <button>추가하기</button>
        </form>
      </header>

      <div>
        <h3>Working..💡</h3>
        <div style={planStyle}>
          {plans.map((plan) => {
            return (
              <Plan
                key={plan.id}
                plan={plan}
                deleteUserHandler={deleteUserHandler}
              />
            );
          })}
        </div>
      </div>
      <div>
        <h3>Done !!😺</h3>
      </div>
    </>
  );
};

const Plan = ({ plan, deleteUserHandler }) => {
  const squareStyle = {
    width: "200px",
    height: "100px",
    gap: "5px",
    border: "5px solid pink",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  const titleStyle = {
    fontSize: "30px",
    fontWeight: "bold",
    margin: "0",
  };

  const bodyStyle = {
    fontSize: "20px",
    margin: "0",
  };

  const { title, body, id } = plan;

  return (
    <div style={squareStyle}>
      <p style={titleStyle}>{title}</p>
      <p style={bodyStyle}>{body}</p>
      <div>
        <button onClick={() => deleteUserHandler(id)}>삭제</button>
        <button>완료</button>
      </div>
    </div>
  );
};

export default App;
