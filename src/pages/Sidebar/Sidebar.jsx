import { useFormContext } from "../../contexts/FormContext";
import styles from "./Sidebar.module.css";
function Sidebar() {
  const { step } = useFormContext();
  return (
    <aside id={styles.sidebar}>
      <div>
        <div className={`${styles.btn} ${step === 1 && styles.active} `}>1</div>
        <div className={`${styles["btn-info"]}`}>
          <span>Step 1</span>
          <p>Your Info</p>
        </div>
      </div>

      <div>
        <div className={`${styles.btn} ${step === 2 && styles.active}`}>2</div>
        <div className={`${styles["btn-info"]}`}>
          <span>Step 2</span>
          <p>Select plan</p>
        </div>
      </div>

      <div>
        <div className={`${styles.btn} ${step === 3 && styles.active}`}>3</div>
        <div className={`${styles["btn-info"]}`}>
          <span>Step 3</span>
          <p>Add-ons</p>
        </div>
      </div>

      <div>
        <div className={`${styles.btn} ${step === 4 && styles.active}`}>4</div>
        <div className={`${styles["btn-info"]}`}>
          <span>Step 4</span>
          <p>Summary</p>
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
