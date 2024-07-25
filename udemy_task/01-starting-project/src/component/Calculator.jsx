import { useState } from "react";
import Result from "./Result";
import UserInput from "./UserInput";
import { calculateInvestmentResults } from "../util/investment.js";

const Calculator = () => {
  const [investmentDetails, setInvestmentDetails] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInvestmentDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const investmentData = calculateInvestmentResults({
    initialInvestment: Number(investmentDetails.initialInvestment),
    annualInvestment: Number(investmentDetails.annualInvestment),
    expectedReturn: Number(investmentDetails.expectedReturn),
    duration: Number(investmentDetails.duration),
  });

  return (
    <div>
      <UserInput
        investmentDetails={investmentDetails}
        handleChange={handleChange}
      />
      <Result investmentData={investmentData} />
    </div>
  );
};

export default Calculator;
