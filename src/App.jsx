import About from "./components/About";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Features from "./components/Features";
import Contact from "./components/Contact";
import FloatingImage from "./components/Stroy";

function App() {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <About />
      <Features />
      <FloatingImage />
      <Contact />
    </main>
  );
}

export default App;