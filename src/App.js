import BackgroundDots from "./components/BackgroundDots";
import Header from "./components/Header";

function App() {
  return (
    <div className="relative min-h-screen bg-page text-ink">
      <BackgroundDots />
      <div className="relative z-10">
        <Header />
        <main>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
          <div className="container">test</div>
        </main>
      </div>
    </div>
  );
}

export default App;
