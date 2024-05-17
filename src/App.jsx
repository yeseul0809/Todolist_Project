import { useState } from "react";
import "./App.css";
import "./components/Plan/Plan.css";
import InputForm from "./components/Input/Input";
import PlansList from "./components/Plan/PlansList";

const App = () => {
  const [plans, setPlans] = useState([]);

  // 삭제 컴포넌트
  const deleteUserHandler = (id) => {
    const deletedPlans = plans.filter((plan) => plan.id !== id);
    setPlans(deletedPlans);
  };

  // 완료 컴포넌트
  const completeHandler = (id) => {
    // 계획 리스트 업데이트
    const completePlans = plans.map((plan) =>
      plan.id === id ? { ...plan, isDone: !plan.isDone } : plan
    );
    setPlans(completePlans);
  };

  return (
    <>
      <header>
        {/* Input */}
        <h1>My Todo List</h1>
        <InputForm setPlans={setPlans} />
      </header>
      {/* Working Plans */}
      <PlansList
        plans={plans}
        deleteUserHandler={deleteUserHandler}
        completeHandler={completeHandler}
        isDone={false}
      />
      {/* Done Plans */}
      <PlansList
        plans={plans}
        deleteUserHandler={deleteUserHandler}
        completeHandler={completeHandler}
        isDone={true}
      />
    </>
  );
};

export default App;
