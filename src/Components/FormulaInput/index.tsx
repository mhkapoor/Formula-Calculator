import React from "react";

interface FormulaInputProps {
  formula: string;
  setFormula: React.Dispatch<React.SetStateAction<string>>;
}

const FormulaInput: React.FC<FormulaInputProps> = ({ formula, setFormula }) => {
  return (
    <>
      <div className="formula-section">
        {" "}
        {/* Formula Input */}
        <label>Enter Formula:</label>
        <input
          type="text"
          value={formula}
          onChange={(e) => setFormula(e.target.value)}
          placeholder="Enter formula (e.g., a + b)"
          className="formula-input"
        />
      </div>
    </>
  );
};

export default FormulaInput;
