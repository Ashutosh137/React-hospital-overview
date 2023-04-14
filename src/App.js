import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import Contact from "./components/contact/contact";
import { Department } from "./components/department/department";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthContext from "./data/data";
function App() {
  let hospital = {
    name: " ananta hospital",
    contact_Number: "1234567890",
    email: "mr.luckysharma7@gmail.com",
    facebook: "https://www.facebook.com/",
    instragram: "https://www.instragram.com",
    twitter: "https://twitter.com/",
    linkdin: "https://www.linkdin.com",
  };
  let department = [
    {
      name: "Outpatient Department (OPD)",
      desc: "The Most hospitals now have an OPD. The advantage of OPD is that much of the investigative unit and curative work can be done there without admitting the client, thus curtailing medical expense"
    },
    {
      name: "Outpatient Department (OPD)",
      desc: "The Most hospitals now have an OPD. The advantage of OPD is that much of the investigative unit and curative work can be done there without admitting the client, thus curtailing medical expense"
    },
    {
      name: "Outpatient Department (OPD)",
      desc: "The Most hospitals now have an OPD. The advantage of OPD is that much of the investigative unit and curative work can be done there without admitting the client, thus curtailing medical expense"
    },
    {
      name: "Outpatient Department (OPD)",
      desc: "The Most hospitals now have an OPD. The advantage of OPD is that much of the investigative unit and curative work can be done there without admitting the client, thus curtailing medical expense"
    },
    {
      name: "Outpatient Department (OPD)",
      desc: "The Most hospitals now have an OPD. The advantage of OPD is that much of the investigative unit and curative work can be done there without admitting the client, thus curtailing medical expense"
    },
    {
      name: "neurosurgery",
      desc: "The neurosurgery department is a state-of-the-art center for treatment of diseases of the brain and…",
    },
    {
      name: "Urology",
      desc: "The Department of Urology evaluates and treats a vast range of Urologic disorders. Urology is…",
    },
    {
      name: "Nephrology",
      desc: "Nephrology is a medical branch that covers the diagnosis, treatment and management of kidney diseases.",
    },
    {
      name: "Inpatient Service (IP)",
      desc: "If OPD is the show window of the hospital the IP is the heart of the hospital The IP service provides lodging diet and medical care Conveniently it can be divided into"
    },
    {
      name: "Inpatient Service (IP)",
      desc: "The nursing department is the organizational structure through which nurses provide nursing care for clients under the jurisdiction of the institution. The nursing department consists of nursing service and nursing education. The primary purpose of the nursing service is to provide comprehensive, safe, effective and well-organized nursing care through the personnel of the department. The personnel consists of nursing superintendent, assistant nursing superintendents, head nurses and staff nurses. All of these are registered nurses, other personnel who function in the nursing service department may include the auxiliary personnel nurse aids and domestics who handle the non-nursing services"

    },
  ];

  return (
    <>
      <AuthContext.Provider value={{hospital, department}}>
        <Router>
          <Navbar name={hospital.name} />
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/department" element={<Department department={department} />} />
          </Routes>
        </Router>
        <Footer hospital={hospital} />
      </AuthContext.Provider>   </>
  );
}

export default App;
