import { useFormContext } from "../../contexts/FormContext";
import styles from "./Checkout.module.css";
function Checkout() {
  const {
    selectedPlan,
    billingPeriod,
    prices,
    selectedAddons,
    data,
    total,
    navigate,
    setStep,
  } = useFormContext();

  const planDuration = billingPeriod === "monthly" ? "mo" : "yr";
  let dtotal = prices[billingPeriod][selectedPlan] + total;

  return (
    <div className="page">
      <h1>Finishing up</h1>
      <p>Double-check everything looks OK before confirming.</p>
      <div>
        <div className={styles.planSummaryDetails}>
          <div>
            <div className={styles.planSummary}>
              <span className={styles.planPicked}>{selectedPlan} </span>
              <span className={styles.planDurationSummary}>
                ({billingPeriod})
              </span>
            </div>
            <span
              className={styles.changePlan}
              onClick={() => {
                navigate("plans");
                setStep(2);
              }}
            >
              Change
            </span>
          </div>
          <div className={styles.planPickedPrice}>
            ${prices[billingPeriod][selectedPlan]}/{planDuration}
          </div>
        </div>
        <hr />
        <div className={styles.addOnsPicked}>
          {selectedAddons.map((addon, id) => {
            const index = data.addsOnType.indexOf(addon);
            return (
              <div className={styles.addOnsType} key={id}>
                <span className={styles.addOnType}>{addon}</span>
                <span className={styles.addOnPrice}>
                  +${prices[billingPeriod].addsOnPrices[index]}/{planDuration}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className={styles.totalPrice}>
        <span>Total {billingPeriod === "yearly" ? "year" : "month"}</span>
        <span className={styles.totalAmount}>
          {dtotal}/{planDuration}
        </span>
      </div>
    </div>
  );
}

export default Checkout;
