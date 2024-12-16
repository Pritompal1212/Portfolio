import Topbar from "./components/Topbar";
import Frontpage from "./components/Frontpage";
import Aboutme from "./components/Aboutme";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Portfolio from "./components/Protfolio";
import Footer from "./components/Footer";
import Education from "./components/Education";

function App() {
  return (
    <>
      <Topbar />
      <Frontpage />
      <Aboutme />
      <Education/>
      <Skills />
      <Portfolio />
      <Services />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
