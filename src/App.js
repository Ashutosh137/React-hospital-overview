import './App.css';
import Navbar from './components/navbar/navbar';
import Home from './components/home/content';
import Footer from './components/footer/footer';
import About from './components/about/about';
import Department from './components/department/department';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes
} from "react-router-dom" ;
function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Switch>
          <Route path="/about" render={()=>{
          return(
            <>
            <About />
            </>
          )}}
          />
          <Route exact path="/">
          <Home/>
          </Route>
          <Route path="/department" render={()=>{
          return(
            <>
            <Department />
            </>
          )}}
          />
        </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
