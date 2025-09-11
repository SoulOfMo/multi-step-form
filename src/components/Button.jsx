import { Children } from "react";
import styles from "./Button.module.css";
function Button({ children, type, onClick }) {
  return (
    <button
      className={type === "next" ? styles.nextBtn : styles.prevBtn}
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default Button;
