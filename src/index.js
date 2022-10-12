import ReactDOM from "react-dom/client";

// add the green inside this function
const Alert = (props) => {
  return (
    <div
      className={`alert alert-${
        props.color === "red"
          ? "danger"
          : props.color === "orange"
          ? "warning"
          : "success"
      } `}
      role="alert"
    >
      {props.text}
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Alert text="OMG! Something really bad has happended!" color="red" />
    <Alert text="Well, it is not that bad after all!" color="orange" />
    <Alert text="I am supposed to be green" color="green" />
  </div>
);
