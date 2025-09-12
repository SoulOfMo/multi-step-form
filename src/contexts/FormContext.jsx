import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FormContexts = createContext();

function FormContextProvider({ children }) {
  const defaultFormData = { fullname: "", email: "", phonenumber: "" };
  const [step, setStep] = useState(() => {
    const storedStep = JSON.parse(localStorage.getItem("step"));
    return storedStep || 1;
  });

  const [formData, setFormData] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("formData"));
    return storedData || defaultFormData;
  });

  const [selectedPlan, setSelectedPlan] = useState(() => {
    const storedPlan = JSON.parse(localStorage.getItem("selectedPlan"));
    return storedPlan || "arcade";
  });

  const [selectedAddons, setSelectedAddons] = useState([]);

  const [billingPeriod, setBillingPeriod] = useState(() => {
    const storedPeriod = JSON.parse(localStorage.getItem("billingPeriod"));
    return storedPeriod || "monthly";
  });

  const [errMsgs, setErrMsgs] = useState({});
  const [total, setTotal] = useState(0);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
    localStorage.setItem("step", JSON.stringify(step));

    localStorage.setItem("selectedPlan", JSON.stringify(selectedPlan));
    localStorage.setItem("billingPeriod", JSON.stringify(billingPeriod));
  }, [formData, step, selectedPlan, billingPeriod]);

  const navigate = useNavigate();

  useEffect(() => {
    // Runs only on mount
    const isReload =
      performance.getEntriesByType("navigation")[0].type === "reload";

    if (isReload && step === 5) {
      localStorage.clear();
      setStep(1);
      setFormData(defaultFormData);
      setSelectedPlan(null);
      navigate("/");
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const prices = {
    monthly: {
      arcade: 9,
      advanced: 12,
      pro: 15,
      addsOnPrices: [1, 2, 2],
    },
    yearly: {
      arcade: 90,
      advanced: 120,
      pro: 150,
      addsOnPrices: [10, 20, 20],
    },
  };

  const data = {
    planName: "Monthly",
    planDuration: "mo",
    planType: ["Arcade", "Advanced", "Pro"],
    addsOnType: ["Online Service", "Large storage", "Customizable profile"],
    addsOnTypeDetails: [
      "Access to multiplayer games",
      "Extra 1TB of cloud save",
      "Custom theme on your profile",
    ],
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.fullname.trim()) {
      newErrors.fullname = "Full Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    if (!formData.phonenumber.trim()) {
      newErrors.phonenumber = "This field is required";
    }
    setErrMsgs(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleIncreaseStep = () => {
    if (!validateForm()) return;

    setStep((prev) => {
      const nextStep = prev < 5 ? prev + 1 : 5;

      switch (nextStep) {
        case 2:
          navigate("plans");
          break;
        case 3:
          navigate("addons");
          break;
        case 4:
          navigate("checkout");
          break;
        case 5:
          navigate("summary");
          break;
        default:
          break;
      }

      return nextStep;
    });
  };

  const handleDecreaseStep = () => {
    setStep((prev) => {
      const nextStep = prev > 1 ? prev - 1 : 1;

      switch (nextStep) {
        case 1:
          navigate("/");
          break;
        case 2:
          navigate("plans");
          break;
        case 3:
          navigate("addons");
          break;
        case 4:
          navigate("checkout");
          break;

        default:
          break;
      }

      return nextStep;
    });
  };

  return (
    <FormContexts.Provider
      value={{
        step,
        setStep,
        formData,
        errMsgs,
        handleChange,
        handleIncreaseStep,
        validateForm,
        handleDecreaseStep,
        prices,
        selectedPlan,
        billingPeriod,
        setBillingPeriod,
        setSelectedPlan,
        selectedAddons: selectedAddons || [],
        setSelectedAddons,
        data,
        total,
        setTotal,
        navigate,
      }}
    >
      {children}
    </FormContexts.Provider>
  );
}

function useFormContext() {
  const context = useContext(FormContexts);
  if (context === undefined)
    throw new Error("CitiesContext was used outside the CitiesProvider");
  return context;
}

export { FormContextProvider, useFormContext };
