import { useFormContext } from "../contexts/FormContext";
import Button from "./Button";
import styles from "./Nav.module.css";
function Nav() {
  const { step, handleIncreaseStep, handleDecreaseStep } = useFormContext();
  return (
    <div className={`${styles.nav} ${step === 1 && styles.flexEnd}`}>
      {step > 1 && <Button onClick={handleDecreaseStep}>Go back</Button>}
      <Button onClick={handleIncreaseStep} type="next">
        {step <= 3 ? "Next Step" : "Confrim"}
      </Button>
    </div>
  );
}

export default Nav;
