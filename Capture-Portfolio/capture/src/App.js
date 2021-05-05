import React from 'react';
import { Switch, Route } from 'react-router-dom';
//Import GlobalStyle
import GlobalStyle from './components/GlobalStyled';
import Nav from './components/Nav';
//Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MoveDetail';

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Nav /> 
      <Switch>  
        <Route path="/" exact>
       <AboutUs/>
      </Route> 
      <Route path="/work" exact>
        <OurWork/>
      </Route>
      <Route path="/work/:id">
        <MovieDetail />
      </Route>
      <Route path="/contact">
        <ContactUs/>
      </Route>    
      </Switch>
    </div>
  );
}

export default App;
