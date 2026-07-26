import { useEffect, useState ,useRef} from "react";

function StepChecklist({ steps, onProgressChange }) {
  const [completedSteps, setCompletedSteps] = useState([]);
useEffect(() => {
  setCompletedSteps([]);
}, [steps]);
  const toggleStep = (index) => {
    if (completedSteps.includes(index)) {
      setCompletedSteps(
        completedSteps.filter((step) => step !== index)
      );
    } else {
      setCompletedSteps([...completedSteps, index]);
    }
  };

  useEffect(() => {
    if (onProgressChange) {
      onProgressChange(completedSteps.length);
    }
  }, [completedSteps, onProgressChange]);

  return (
    <div className="recipe-section">
      <h3>👨‍🍳 Instructions</h3>

      <ol className="step-list">
        {steps.map((step, index) => (
          <li key={index}>
            <label className="step-item">
              <input
                type="checkbox"
                checked={completedSteps.includes(index)}
                onChange={() => toggleStep(index)}
              />

              <span
                className={
                  completedSteps.includes(index)
                    ? "completed-step"
                    : ""
                }
              >
                {typeof step === "string"
  ? step
  : step.instruction || step.text || JSON.stringify(step)}
                {step}
              </span>
            </label>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default StepChecklist;