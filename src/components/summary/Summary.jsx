import styles from "./Summary.module.css";
import thankYouIcon from "../../assets/images/icon-thank-you.svg";
function Summary() {
  return (
    <div className={`page ${styles.summaryInfo} `}>
      <img src={thankYouIcon} alt="icon-thank-you" />
      <h2>Thank you !</h2>
      <p>
        Thanks for confirming your subscription ! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        morinsultan@gamil.com.
      </p>
    </div>
  );
}

export default Summary;
