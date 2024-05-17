import { useState } from "react";
import Swal from "sweetalert2";
import { v4 as uuidv4 } from "uuid";
import "./Input.css";

const InputForm = ({ setPlans, plans }) => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // plans 추가 컴포넌트
  const onSubmitHandler = (e) => {
    e.preventDefault();

    // 유효성 검사
    if (!title.trim() || !body.trim()) {
      Swal.fire({
        title: "다시 입력해주세요.",
        text: "제목과 내용을 모두 입력해야합니다.",
        icon: "warning",
        confirmButtonText: "확인",
      });
      return;
    }
    const newPlan = {
      id: uuidv4(),
      title: title,
      body: body,
      isDone: false,
    };
    setPlans((plans) => [...plans, newPlan]);
    setTitle("");
    setBody("");
  };

  return (
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
  );
};

export default InputForm;
