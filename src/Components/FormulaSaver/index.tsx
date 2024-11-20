import React from "react";
import useFormula from "./useFormula";
import { CONSTANTS } from "../../config";

interface FormulaSaverProps {
  formula: string;
}

const FormulaSaver: React.FC<FormulaSaverProps> = ({ formula }) => {
  const { savedFormulas, updateFormula } = useFormula();

  return (
    <>
      <button
        onClick={() => updateFormula(formula)}
        style={{ padding: "10px", marginTop: "20px" }}
      >
        {CONSTANTS.SaveFormula}
      </button>

      {/* Display Saved Formulas */}
      <div style={{ marginTop: "10px" }}>
        {!!savedFormulas.length && <h3>{CONSTANTS.SavedFormulas}</h3>}
        {!!savedFormulas.length && (
          <ul>
            {savedFormulas.map((savedFormula, index) => (
              <li key={index}>{savedFormula}</li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};

export default FormulaSaver;
