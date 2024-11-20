import React from "react";
import { BlockMath } from "react-katex";
import "katex/dist/katex.min.css"; // Import KaTeX CSS for proper rendering
import { CONSTANTS } from "../../config";

interface LatexVersionProps {
  renderedFormula: string;
}

const LatexVersion: React.FC<LatexVersionProps> = ({ renderedFormula }) => {
  return (
    <>
      {" "}
      <p>{CONSTANTS.LatexVersion}</p>
      <div className="latex-formula" >
        <BlockMath math={`${renderedFormula}`} />
      </div>
    </>
  );
};

export default LatexVersion;
