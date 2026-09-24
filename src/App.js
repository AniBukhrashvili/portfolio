import BackgroundDots from "./components/BackgroundDots";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ScrollIndicator from "./components/ScrollIndicator";

function App() {
  return (
    <div className="relative min-h-screen bg-page text-white">
      <BackgroundDots />
      <div className="relative z-10">
        <Header />
        <ScrollIndicator />
        <main>
          <Hero />
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
