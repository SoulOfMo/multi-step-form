import { useFormContext } from "../../contexts/FormContext";
import styles from "./Info.module.css";
function Info() {
  const { formData, errMsgs, handleChange } = useFormContext();

  return (
    <div className={`page ${styles.personalInfo}`}>
      <h1>Personal info</h1>
      <p>Please provide your name, email address, and phone number.</p>

      <div>
        <label
          htmlFor="name"
          className={`${errMsgs.fullname ? styles.error : ""}`}
        >
          <span>
            Name
            <span
              id="name-error"
              className={`${styles.errMsg}`}
              aria-live="polite"
            >
              {errMsgs.fullname}
            </span>
          </span>
          <input
            type="text"
            name="fullname"
            id="name"
            value={formData.fullname}
            onChange={handleChange}
            placeholder="e.g. Stephen King"
            aria-describedby="name-error"
            required
          />
        </label>

        <label
          htmlFor="email"
          className={`${errMsgs.email ? styles.error : ""}`}
        >
          <span>
            Email Address
            <span
              id="email-error"
              className={`${styles.errMsg}`}
              aria-live="polite"
            >
              {errMsgs.email}
            </span>
          </span>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder=" e.g. stephenking@lorem.com"
            aria-describedby="email-error"
            required
          />
        </label>

        <label
          htmlFor="phonenumber"
          className={`${errMsgs.phonenumber ? styles.error : ""}`}
        >
          <span>
            Phone Number
            <span
              id="phonenumber-error"
              className={`${styles.errMsg}`}
              aria-live="polite"
            >
              {errMsgs.phonenumber}
            </span>
          </span>
          <input
            type="tel"
            name="phonenumber"
            id="phonenumber"
            value={formData.phonenumber}
            onChange={handleChange}
            placeholder="e.g. +1 234 567 890"
            required
            aria-describedby="phonenumber-error"
            className="no-spinners"
          />
        </label>
      </div>
    </div>
  );
}

export default Info;
