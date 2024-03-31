import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import Gallary from "./components/gallary/gallary";
import Contact from "./components/contact/contact";
import { Department } from "./components/department/department";
import department from "./data/department";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {

  const hospital = {
    name: "MirrorMed hospital",
    contact_Number: "7877997488",
    email: "mr.luckysharma7@gmail.com",
    facebook: "https://www.facebook.com/",
    instragram: "https://www.instragram.com",
    twitter: "https://twitter.com/",
    linkdin: "https://www.linkdin.com",
  };


  return (
    <Router>
      <div className="block sm:mx-10 p-2 ">
        <Navbar name={hospital.name} />
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/" element={<Home name={hospital.name} />}></Route>
          <Route path="/department" element={<Department department={department} />} />
        </Routes>
      </div>
      <Footer hospital={hospital} />
    </Router>
  );
}

export default App;
