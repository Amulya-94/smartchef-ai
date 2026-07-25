import { FaUtensils } from "react-icons/fa";

function EmptyState() {
  return (
    <section className="card empty-state">
      <FaUtensils size={48} />

      <h2>No Recipe Yet</h2>

      <p>
        Enter your available ingredients above and click{" "}
        <strong>Generate Recipe</strong> to create a personalized meal.
      </p>
    </section>
  );
}

export default EmptyState;