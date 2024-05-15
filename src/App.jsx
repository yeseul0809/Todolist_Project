import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./App.css";
import "./Plan.css";
import swal from "sweetalert";
import Plan from "./Plan";

const App = () => {
  const [plans, setPlan] = useState([]);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // plans 객체 생성 컴포넌트
  const onSubmitHandler = (event) => {
    event.preventDefault();

    // 유효성 검사
    // 제목이나 내용 둘중하나라도 빈칸이면 swal 창을 띄우고 여기서 종료시킨다.
    if (!title.trim() || !body.trim()) {
      swal(
        "다시 입력해주세요.",
        "제목과 내용을 모두 입력해야합니다.",
        "warning"
      );
      return;
    }
    const newPlan = {
      id: uuidv4(),
      title: title,
      body: body,
      isDone: false,
    };
    console.log(newPlan);

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
        <form className="inputStyle" onSubmit={onSubmitHandler}>
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

      <div className="working">
        <h3 className="miniTitle">Working..💡</h3>
        <div className="planStyle">
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
      <div className="done">
        <h3 className="miniTitle">Done !!😺</h3>
        <div className="planStyle">
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
