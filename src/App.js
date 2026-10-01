import BackgroundDots from "./components/BackgroundDots";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="relative min-h-screen bg-page text-ink">
      <BackgroundDots />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
