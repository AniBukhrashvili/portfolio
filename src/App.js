import BackgroundDots from "./components/BackgroundDots";
import Experience from "./components/Experience";
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
          <Experience />
        </main>
      </div>
    </div>
  );
}

export default App;
