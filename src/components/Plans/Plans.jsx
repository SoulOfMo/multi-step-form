import styles from "./Plans.module.css";
import acardeImg from "../../assets/images/icon-arcade.svg";
import advanceImg from "../../assets/images/icon-advanced.svg";
import proImg from "../../assets/images/icon-pro.svg";
import Plan from "./Plan";
import { useFormContext } from "../../contexts/FormContext";

function Plans() {
  const {
    selectedPlan,
    setSelectedPlan,
    billingPeriod,
    setBillingPeriod,
    prices,
  } = useFormContext();

  function OnSelectPlan(e) {
    setSelectedPlan(e.target.value);
  }

  return (
    <div className={`page ${styles.plansInfo}`}>
      <h1>Select your plan</h1>
      <p>You have the option of monthly or yearly billing.</p>

      <div id={styles.plans}>
        <div className={styles.plans}>
          <Plan
            planType="arcade"
            selectedPlan={selectedPlan}
            OnSelected={OnSelectPlan}
            imgSrc={acardeImg}
            planPrice={prices[billingPeriod].arcade}
            alt="acarde-image"
            styles={styles}
            billingPeriod={billingPeriod}
          ></Plan>

          <Plan
            planType="advanced"
            selectedPlan={selectedPlan}
            OnSelected={OnSelectPlan}
            imgSrc={advanceImg}
            planPrice={prices[billingPeriod].advanced}
            alt="game-pad-icon"
            styles={styles}
            billingPeriod={billingPeriod}
          ></Plan>

          <Plan
            planType="pro"
            selectedPlan={selectedPlan}
            OnSelected={OnSelectPlan}
            imgSrc={proImg}
            planPrice={prices[billingPeriod].pro}
            alt="game-pad-icon"
            styles={styles}
            billingPeriod={billingPeriod}
          ></Plan>
        </div>

        {/* selecting period type */}
        <div
          className={styles.period}
          onClick={() =>
            setBillingPeriod((prev) =>
              prev == "monthly" ? "yearly" : "monthly"
            )
          }
        >
          <p className="monthPlan active-plan">Monthly</p>
          <div className={styles.toggle}>
            <div
              className={`${styles.slider} ${
                billingPeriod === "yearly" ? styles.sliderActive : ""
              }`}
            ></div>
          </div>
          <p className="yearPlan">Yearly</p>
        </div>
      </div>
    </div>
  );
}

export default Plans;
