import PreOrderForm from "./components/PreOrderForm/pre-order-form";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* Header */}
      <header className="App-header">
        <h1>NXT LVL Games™</h1>
      </header>

      {/* Main Content */}
      <main>
        <PreOrderForm />
      </main>

      {/* Footer */}
      <footer className="App-footer">
        <p>© 2025 NXT LVL Games™. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default App;