import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Work from "./components/Work";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Work />
    </main>
  );
}

export default App;
// className="flex justify-center gap-4 flex-col min-h-screen"