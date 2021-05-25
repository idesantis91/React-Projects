import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
//Import GlobalStyle
import GlobalStyle from './components/GlobalStyled';
import Nav from './components/Nav';
//Import Pages
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import OurWork from './pages/OurWork';
import MovieDetail from './pages/MoveDetail';
//Animation
import {AnimatePresence } from 'framer-motion';

function App() {
  const location = useLocation();

  return (
    <div className="App">
      <GlobalStyle />
      <Nav /> 
      <AnimatePresence exitBeforeEnter>
      <Switch location={location} key={location.pathname}>  
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
      </AnimatePresence>
    </div>
  );
}

export default App;
