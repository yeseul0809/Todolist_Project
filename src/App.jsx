import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import "./Plan.css";
import Plan from "./Plan";

import React from "react";

const App = () => {
  //// *CSS style*
  const inputStyle = {
    backgroundColor: "#ffc5489c",
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
  //// *CSS style*

  const [plans, setPlan] = useState([
    { id: 0, title: "", body: "", isDone: false },
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // plans 객체 생성 컴포넌트
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
    // working 구역 plan 삭제
    const deletedPlans = plans.filter((plan) => plan.id != id);
    setPlan(deletedPlans);
  };

  // 완료 컴포넌트
  const completedHandler = (id) => {
    // 계획 리스트 업데이트
    const completedPlans = plans.map((plan) =>
      plan.id === id ? { ...plan, isDone: !plan.isDone } : plan
    );
    setPlan(completedPlans);
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
          {plans
            .filter((plan) => !plan.isDone)
            .map((plan) => (
              <Plan // props 전달
                key={plan.id}
                plan={plan}
                deleteUserHandler={deleteUserHandler}
                completedHandler={completedHandler}
              />
            ))}
        </div>
      </div>
      <div>
        <h3>Done !!😺</h3>
        <div style={planStyle}>
          {plans
            .filter((plan) => plan.isDone)
            .map((plan) => (
              <Plan
                key={plan.id}
                plan={plan}
                deleteUserHandler={deleteUserHandler}
                completedHandler={completedHandler}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default App;
