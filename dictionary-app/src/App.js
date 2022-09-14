import "./App.css";
import Search from "./Search";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Search defaultKeyword="beautiful" />
        </main>
        <footer>
          <p>
            This app is coded by Mariia Monakhova and is{" "}
            <a href="https://github.com/MariiaMonakhova/my-react-dictionary-app">
              open-sourced
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
