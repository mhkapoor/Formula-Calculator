import { evaluate } from "mathjs";

export function containsMathFunctionsOnly(input: string): boolean {
  // Regex to match mathematical functions (e.g., sin(), cos(), log(), etc.)
  const mathFunctionsRegex =
    /^[\s*(]*(sin|cos|tan|log|sqrt|abs|exp|asin|acos|atan|log10|log2)\([^\)]*\)[\s*)]*$/;

  const containsMathFunctions = mathFunctionsRegex.test(input);

  // Return true if condition met
  return containsMathFunctions;
}
// Function to detect variables (letters a-z, A-Z)
export const extractVariables = (formula: string) => {
  const regex = /[a-zA-Z]/g; // Match individual character (case-insensitive)
  const variables = new Set(
    [...formula.matchAll(regex)].map((match) => match[0])
  ); // Use a Set to store unique variables
  return Array.from(variables); // Return unique variables as an array
};

// Function to replace variables in the formula with their corresponding values
export const replaceVariablesInFormula = (
  formula: string,
  variables: { [key: string]: number }
): string => {
  let modifiedFormula = formula
    .replace(/\*/g, ".")
    .replace(/[a-zA-Z]+/g, (match) => {
      return match.split("").join(".");
    });
  for (let [variable, value] of Object.entries(variables)) {
    // Replace NaN with 0 in the formula string (if necessary)
    if (isNaN(value)) {
      value = 0; // If the result is NaN, set the formula to 0
    }

    const regex = new RegExp(`${variable}`, "g"); // Match single word
    // console.log(variable, regex, value.toString())
    modifiedFormula = modifiedFormula.replace(regex, value.toString());
  }
  return modifiedFormula;
};


function preprocessFormula(formula: string): string {
  // while(formula.includes('(') && formula.includes(')') && hasNonEmptyParentheses(formula)){
  //   console.log(formula)
  //   formula = formula
  //   .replace(/\((\d+|\w+)\)/g, "$1*")
  // }
  // // formula = simplifyExpression(formula)
  formula
    .replace(/\((\d+|\w+)\)/g, "$1")
    .replace(/([a-zA-Z])([a-zA-Z])/g, "$1*$2")
    .replace(/(?<=\d)([a-zA-Z])/g, "*$1") // Add multiplication between numbers and variables (e.g., 2x -> 2*x)
    .replace(/([a-zA-Z])(\d)/g, "$1*$2") // Add multiplication between variables and numbers (e.g., x2 -> x*2)
    .replace(/([a-zA-Z])([a-zA-Z])/g, "$1*$2") // Ensure multiplication between variables/numbers
    .replace(/(\-\s?\d+)([a-zA-Z])/g, "($1)*$2") // Handle cases like -2x -> (-2)*x
    .replace(/(\d)([a-zA-Z])/g, "$1") // Add multiplication for numbers and variables like 2x -> 2*x
    .replace(/\^/g, "**"); // Replace exponentiation operator
  
    // Step 2: Recursively process all nested parentheses
    // Continue replacing nested parentheses (any expression inside parentheses)
    // while (formula.includes('(')) {
    //   // Replace the innermost parentheses first
    //   formula = formula.replace(/\(([^()]+)\)/g, (match, p1) => {
    //     // Replace (x) -> x (and in case there are nested ones inside, the same logic applies)
    //     return p1.replace(/\((\d+)\)(\d+)/g, (m: string, p1: string, p2: string) => {
    //       return `${p1}*${p2}`;
    //     });
    //   });
    // }
    console.log(formula,'lasterrr')
    return formula;

}

// Function to safely evaluate formulas without using eval
export const evaluateFormula = (
  formula: string,
  values: { [key: string]: number }
) => {
  if (containsMathFunctionsOnly(formula)) {
    try {
      // Use mathjs to parse and evaluate the expression, including trigonometric and logarithmic functions
      const result = evaluate(formula); // mathjs handles functions like sin, cos, log, etc.

      return result;
    } catch (error) {
      return "Error: Invalid function call";
    }
    
  }
  const preprocessedFormula = preprocessFormula(formula);
  try {
    // Simple math operations (could be extended)
    const modifiedFormula = preprocessedFormula.replace(
      /[a-zA-Z]+/g,
      (match) => {
        return `${
          values[match] !== undefined
            ? values[match] < 0
              ? `(${values[match]})`
              : values[match]
            : 0
        }`;
      }
    );
    return new Function("Math", "return " + modifiedFormula)(Math); // Avoid eval, use Function constructor
  } catch (error) {
    return "Error: Invalid formula or missing variable";
  }
};
