import React, { useState } from "react";

// Custom Hook to manage the formula
function useFormula() {
  const savedFormula = localStorage.getItem("formulas");
  // return savedFormula ? savedFormula : "";
  // Retrieve saved formula from localStorage, default to empty string
  const [savedFormulas, setSavedFormulas] = useState<string[]>(
    savedFormula ? JSON.parse(savedFormula) : []
  ); // Store saved formulas

  // Save the current formula to localStorage
  const updateFormula = (formula: string) => {
    const updatedFormulas = [...savedFormulas, formula];
    setSavedFormulas(updatedFormulas as any);
    localStorage.setItem("formulas", JSON.stringify(updatedFormulas)); // Store in localStorage
  };
  return { savedFormulas, updateFormula };
}

export default useFormula;
