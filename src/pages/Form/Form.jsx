import { Outlet } from "react-router-dom";
import styles from "./Form.module.css";
import Nav from "../../components/Nav";
function Form() {
  return (
    <form>
      <div id={styles.mainpage}>
        <Outlet />
      </div>
      <Nav />
    </form>
  );
}

export default Form;
