import React from "react";
import ReactDOM from "react-dom/client";

function Header() {
  return <h1>Andy's Pizza Co.</h1>;
}

function Pizza() {
  return (
    <div>
      <img src="pizzas/spinaci.jpg" alt="Spinach Pizza" />
      <h3>Spinach Pizza</h3>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
      <p>10</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Header />
      <Pizza />
      <Pizza />
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
