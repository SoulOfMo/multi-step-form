import { useFormContext } from "../../contexts/FormContext";
import Addon from "./Addon";
import styles from "./Addons.module.css";
function Addons() {
  const {
    billingPeriod,
    setSelectedAddons,
    selectedAddons,
    data,
    setTotal,
    prices,
  } = useFormContext();

  function Onselect(e) {
    const addon = e.target.value;

    if (e.target.checked) {
      setSelectedAddons((prev) => [...prev, addon]);
      setTotal((prevTotal) => prevTotal + Number(e.target.dataset.price));
    } else {
      setSelectedAddons((prev) => prev.filter((item) => item !== addon));
      setTotal((prevTotal) => prevTotal - Number(e.target.dataset.price));
    }
  }

  return (
    <div className="page">
      <h1>Pick add-ons</h1>
      <p>Add-ons help enhance your gaming experience.</p>

      <div className={styles.addOns}>
        {data.addsOnType.map((addOn, index) => (
          <Addon
            key={index}
            styles={styles}
            addOnType={addOn}
            OnSelect={Onselect}
            checked={selectedAddons.includes(addOn)}
            addOnDescription={data.addsOnTypeDetails[index]}
            billingPeriod={billingPeriod}
            price={
              billingPeriod === "monthly"
                ? prices.monthly.addsOnPrices[index]
                : prices.yearly.addsOnPrices[index]
            }
          />
        ))}
      </div>
    </div>
  );
}

export default Addons;
