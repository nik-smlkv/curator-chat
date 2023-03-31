import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar.jsx";
import classes from './App.module.css';
function App() {
  return (
    <div className={classes.wrapper}>
    <Header/>
    <Navbar/>
    </div>
  );
}

export default App;
