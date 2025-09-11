function Addon({
  styles,
  addOnType,
  addOnDescription,
  price,
  billingPeriod,
  OnSelect,
  checked,
}) {
  const addOnDuration = billingPeriod === "monthly" ? "mo" : "yr";
  return (
    <label htmlFor={addOnType}>
      <div className={styles.addOnsType}>
        <input
          type="checkbox"
          name={addOnType}
          id={addOnType}
          value={addOnType}
          onChange={OnSelect}
          checked={checked}
          data-price={price}
        ></input>
        <div>
          <p>{addOnType}</p>
          <span>{addOnDescription}</span>
        </div>
      </div>
      <div className={styles.addOnsPrice}>
        +${price}/{addOnDuration}
      </div>
    </label>
  );
}

export default Addon;
