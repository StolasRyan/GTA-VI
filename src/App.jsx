import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import FirstVideo from "./components/FirstVideo";
import Jason from "./components/Jason";
import SecondVideo from "./components/SecondVideo";
import Lucia from "./components/Lucia";
import PostCard from "./components/PostCard";
import Final from "./components/Final";
import Outro from "./components/Outro";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />

      <FirstVideo/>
      <Jason/>

      <SecondVideo/>
      <Lucia/>

      <PostCard/>

      <Final/>

      <Outro/>
    </main>
  );
};

export default App;
