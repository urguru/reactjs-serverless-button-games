import React from 'react';
import NavbarFinal from './components/Navbar'
import {Switch,Route} from 'react-router-dom'
import Error from './components/Error'
import Home from './components/Home'
import Level_1 from './components/Levels/Level_1'
import Level_2 from "./components/Levels/Level_2";
import Level_3 from "./components/Levels/Level_3";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from './components/Footer'
function App() {
  return (
    <React.Fragment>
      <NavbarFinal />
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path="/level_1" component={Level_1} />
        <Route exact path="/level_2" component={Level_2} />
        <Route exact path="/level_3" component={Level_3} />
        <Route component={Error} />
      </Switch>
      <Footer/>
    </React.Fragment>
  );
}

export default App;
