import React, { useState, useEffect, useMemo } from "react";

import {
  containsMathFunctionsOnly,
  evaluateFormula,
  extractVariables,
  replaceVariablesInFormula,
} from "../helper";
import "./FormulaCalculator.css";
import FormulaSaver from "./FormulaSaver";
import DynaminInputs from "./DynamicInputs";
import LatexVersion from "./LatexVersion";
import FormulaInput from "./FormulaInput";
import { CONSTANTS } from "../config";

const FormulaCalculator: React.FC = () => {
  const [formula, setFormula] = useState<string>("a+b"); // Default formula
  const [variables, setVariables] = useState<{ [key: string]: number }>({}); // Store variable values
  const [inputFields, setInputFields] = useState<string[]>([]); // Track the variables for which inputs are generated

  const isMathFncOnly = useMemo(
    () => containsMathFunctionsOnly(formula),
    [formula]
  );
  // Extract variables from the formula whenever it changes
  useEffect(() => {
    if (isMathFncOnly) {
      return setInputFields([]);
    }
    const detectedVariables = extractVariables(formula);
    setInputFields(detectedVariables);
    const initialValues: { [key: string]: number } = {};
    detectedVariables.forEach((variable: string) => {
      initialValues[variable] = 0; // Default all variables to 1
    });
    setVariables(initialValues);
  }, [formula]);

  // Render the LaTeX formula with variable values replaced
  const renderedFormula = useMemo(
    () => replaceVariablesInFormula(formula, variables),
    [formula, variables]
  );

  // Calculate the result based on the formula and current variable values
  const result = useMemo(
    () => evaluateFormula(formula, variables),
    [formula, variables]
  );

  return (
    <div className="calculator-container">
      <h2>{CONSTANTS.CalculatorName}</h2>
      {/* Display the formula in LaTeX */}
      {
        <LatexVersion
          renderedFormula={isMathFncOnly ? formula : renderedFormula}
        />
      }

      <FormulaInput formula={formula} setFormula={setFormula} />

      {/* Dynamic Inputs for each variable */}
      <DynaminInputs
        inputFields={inputFields}
        variables={variables}
        setVariables={setVariables}
      />
      {/* Display the calculated result */}
      <div>
        <h3>{CONSTANTS.Result}</h3>
        <p>{result}</p>
      </div>

      {/* Save Formula Button */}
      <FormulaSaver formula={formula} />
    </div>
  );
};

export default FormulaCalculator;
