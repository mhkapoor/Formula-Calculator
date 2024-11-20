import React from "react";

interface DynaminInputsProps {
  inputFields: string[];
  variables: { [key: string]: number };
  setVariables: React.Dispatch<React.SetStateAction<{ [key: string]: number }>>;
}
const DynaminInputs: React.FC<DynaminInputsProps> = ({
  inputFields,
  variables,
  setVariables,
}) => {
  // Handle input changes for the variables
  const handleInputChange = (variable: string, value: number) => {
    setVariables((prevVars) => ({
      ...prevVars,
      [variable]: value,
    }));
  };

  return (
    <>
      <div className="variable-inputs">
        {inputFields.map((variable, index) => (
          <div key={index} className="input-wrapper">
            <label >{variable}:</label>
            <input
              type="number"
              value={variables[variable]}
              onChange={(e) =>
                handleInputChange(variable, parseFloat(e.target.value))
              }
              className="variable-section"
            //   style={{ marginLeft: "10px", padding: "5px", width: "100px" }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default DynaminInputs;
