import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Services from "./Services";
import { Routes, Route} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Menu from "./Menu/Menu";
import Footer from "./Menu/Footer";

function App() {
  return (
    <>
  
      <Menu/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="home" element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="services" element={<Services/>}/>
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
