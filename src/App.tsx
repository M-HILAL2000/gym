import { useEffect, useState } from "react";
import Navbar from "./scenes/Navbar"
import { SelectedPage } from "./types/types";
import Benefits from "./scenes/pages/Benefits";
import Home from "./scenes/pages/Home";
import OurClasses from "./scenes/pages/OurClasses";
import ContactUs from "./scenes/pages/ContactUs";
import Footer from "./scenes/pages/Footer";


function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      } else {
        setIsTopOfPage(false);
      }
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar 
      isTopOfPage={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}/>

      <Home  setSelectedPage={setSelectedPage}/>
      <Benefits setSelectedPage={setSelectedPage}/>
      <OurClasses  setSelectedPage={setSelectedPage}/>
      <ContactUs  setSelectedPage={setSelectedPage}/>
      <Footer  />
    </div>
  )
}

export default App;
