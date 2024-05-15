import "./Input.css";

const InputForm = ({ title, setTitle, body, setBody, onSubmitHandler }) => {
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
