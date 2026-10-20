import BackgroundDots from "./components/BackgroundDots";
import Beyond from "./components/Beyond";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import SectionSeparation from "./components/SectionSeparation";
import Stack from "./components/Stack";

function App() {
  return (
    <div className="relative min-h-screen bg-page text-ink">
      <BackgroundDots />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <SectionSeparation />
          <Experience />
          <Beyond />
          <SectionSeparation />
          <Projects />
          <SectionSeparation />
          <Stack />
          <SectionSeparation />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
