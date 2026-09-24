import BackgroundDots from "./components/BackgroundDots";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-page text-white">
      <BackgroundDots />
      <main className="relative z-10" />
    </div>
  );
}

export default App;
