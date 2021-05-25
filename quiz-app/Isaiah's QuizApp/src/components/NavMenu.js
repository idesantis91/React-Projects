import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import CreateQuiz from './CreateQuiz';
import PlayQuiz from './PlayQuiz';


const NavMenu = () =>{
    return(
        <div className='nav_menu'>
            <div className='menu-items'>
            <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/CreateQuiz">Create Quiz</Link>
          </li>
          <li>
            <Link to="/PlayQuiz">Play Quiz</Link>
          </li>
        </ul>

        <Switch>
        <Route
            exact path='/CreateQuiz'
            render={props => <CreateQuiz  />}
            />
          <Route
            exact path='/PlayQuiz'
            render={props => <PlayQuiz />}
            />
          {/* <Route path="/">
            <Home />
          </Route> */}
        </Switch>
      </div>
    </Router>
            </div>
        </div>
    )
}
export default NavMenu;