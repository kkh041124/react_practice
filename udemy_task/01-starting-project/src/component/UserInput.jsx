const UserInput = ({ investmentDetails, handleChange }) => {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            name="initialInvestment"
            value={investmentDetails.initialInvestment}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            name="annualInvestment"
            value={investmentDetails.annualInvestment}
            onChange={handleChange}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return (%)</label>
          <input
            type="number"
            step="0.1"
            name="expectedReturn"
            value={investmentDetails.expectedReturn}
            onChange={handleChange}
          />
        </p>
        <p>
          <label>Duration (Years)</label>
          <input
            type="number"
            name="duration"
            value={investmentDetails.duration}
            onChange={handleChange}
          />
        </p>
      </div>
    </section>
  );
};

export default UserInput;
