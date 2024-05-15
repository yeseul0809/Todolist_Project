import "./Plan.css";
import Plan from "./Plan";

const PlansList = ({ plans, deleteUserHandler, completedHandler, isDone }) => {
  return (
    <div className={isDone ? "done" : "working"}>
      <h3 className="miniTitle">{isDone ? "Done !!😺" : "Working..💡"}</h3>
      <div className="planStyle">
        {plans
          .filter((plan) => plan.isDone === isDone)
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
  );
};

export default PlansList;
