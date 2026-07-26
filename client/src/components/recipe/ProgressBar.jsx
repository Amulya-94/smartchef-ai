function ProgressBar({ completed, total }) {
  const progress = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="progress-section">
      <h3>🍳 Cooking Progress</h3>

      <div className="progress-bar">
        <div
          className="progress-fill"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <p>
        {completed} of {total} steps completed
      </p>
    </div>
  );
}

export default ProgressBar;