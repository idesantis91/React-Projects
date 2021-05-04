import React from 'react';
//Import GlobalStyle
import GlobalStyle from './components/GlobalStyled';
//Import Pages
import AboutUs from './pages/AboutUs';
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <AboutUs />
    </div>
  );
}

export default App;
