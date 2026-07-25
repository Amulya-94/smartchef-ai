import Header from "./components/layout/Header";
import IngredientInput from "./components/input/IngredientInput";
import EmptyState from "./components/common/EmptyState";

function App() {
  return (
    <main className="app">
      <div className="container">
        <Header />

        <div className="content">
          <IngredientInput />
          <EmptyState />
        </div>
      </div>
    </main>
  );
}

export default App;