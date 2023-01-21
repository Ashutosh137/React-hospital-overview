import './App.css';
import Navbar from './components/navbar/navbar';
import Content1 from './components/home/content';
import Footer from './components/footer/footer';
import About from './components/about/about';
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
          <Content1/>
          </Route>
        </Switch>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
