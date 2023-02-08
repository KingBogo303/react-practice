import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      style={{ backgroundColor: props.bg }}
      type={props.type || ""}
      onClick={props.onClick}
      className={`${classes.button} ${props.className}`}
    >
      {props.children}
    </button>
  );
};

export default Button;
