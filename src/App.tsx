import './App.css'
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from './components/Projects';
import Services from './components/Services';
import Process from './components/Process';

import '../src/components/Navbar.css';
import '../src/components/Home.css';
import '../src/components/section.css';

function App(){
  return(
    <>
      <Navbar />

      <main>
        <Home />
        <About />
        <Services />
        <Projects />
        <Process />
        <Contact />
      </main>
    </>
  );
}

export default App;






