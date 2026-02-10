import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FirstVideo from "./components/FirstVideo";
import Jason from "./components/Jason";
import SecondVideo from "./components/SecondVideo";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

      <FirstVideo/>
      <Jason/>

      <SecondVideo/>
    </main>
  );
};

export default App;
