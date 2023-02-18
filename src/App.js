import "./App.css";

import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import About from "./components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="main">
        <Home />
        <About />
      </main>
    </div>
  );
}

export default App;
