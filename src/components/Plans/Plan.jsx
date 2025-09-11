function Plan({
  planType,
  selectedPlan,
  OnSelected,
  imgSrc,
  planPrice,
  alt,
  styles,
  billingPeriod,
}) {
  const planDuration = billingPeriod === "monthly" ? "mo" : "yr";
  return (
    <div>
      <input
        type="radio"
        name="plan"
        value={planType}
        id={`${planType}-plan`}
        className="hidden"
        checked={selectedPlan === planType}
        onChange={OnSelected}
      ></input>
      <label
        htmlFor={`${planType}-plan`}
        className={`arcade-plan ${styles.plan}`}
      >
        <img src={imgSrc} alt={alt}></img>
        <div>
          <p className="plan-type">{planType}</p>
          <span className="plan-prices">
            ${planPrice}/{planDuration}
          </span>
          {billingPeriod === "yearly" && (
            <span className="free">2 month free</span>
          )}
        </div>
      </label>
    </div>
  );
}

export default Plan;
