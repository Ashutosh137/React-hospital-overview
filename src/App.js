import "./App.css";
import Navbar from "./components/navbar/navbar";
import Home from "./components/home/home";
import Footer from "./components/footer/footer";
import About from "./components/about/about";
import { Department } from "./components/department/department";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  let hospital = [
    {
      name: " hospital name",
      contact_Number: "1234567890",
      email: "info.123@gmail.com",
    },
  ];
  let department = [
    {
      name: "cardiology",
      desc: "The Cardiology department provides complete cardiac care round-the-clock . This includes both elective and emergency…",
    },
    {
      name: "cardiology",
      desc: "The Cardiology department provides complete cardiac care round-the-clock . This includes both elective and emergency…",
    },
    {
      name: "cardiology",
      desc: "Advanced Neuro Care Institute of Hospital is an integrated institute with a dedicated…",
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
  ];

  return (
    <>
      <Router>
        <Navbar name={hospital[0].name} />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={<Home name={hospital[0].name} />}
          ></Route>
          <Route
            path="/department"
            element={<Department department={department} />}
          />
        </Routes>
      </Router>
      <Footer
        contact={hospital[0].contact_Number}
        name={hospital[0].name}
        email={hospital[0].email}
      />
    </>
  );
}

export default App;
