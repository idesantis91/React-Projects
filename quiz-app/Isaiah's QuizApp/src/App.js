import React, { useState } from 'react';
import PlayQuiz from './components/PlayQuiz';
import CreateQuiz from './components/CreateQuiz';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import { set } from 'mongoose';

function App() {

  // States
	const [currentQuestion, setCurrentQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
  const [quizTitle, setQuizTitle] = useState('');
  const [createQuestion, setCreateQuestion] = useState('');
  const [answerA, setAnswerA] = useState('');
  const [answerB, setAnswerB] = useState('');
  const [answerC, setAnswerC] = useState('');
  const [answerD, setAnswerD] = useState('');


	return (
		<div className='app'>
			<div className='nav_menu'>
            <div className='menu-items'>
            <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/createquiz">Create Quiz</Link>
          </li>
          <li>
            <Link to="/PlayQuiz">Play Quiz</Link>
          </li>
        </ul>

        <Switch className='components'>
        <Route
            exact path='/CreateQuiz'
            render={props => <CreateQuiz createQuestion={createQuestion}
            setCreateQuestion={setCreateQuestion}
            setCurrentQuestion={setCurrentQuestion}
            quizTitle={quizTitle}
            setQuizTitle={setQuizTitle}
            answerA={answerA}
            answerB={answerB}
            answerC={answerC}
            answerD={answerD}
            setAnswerA={setAnswerA}
            setAnswerB={setAnswerB}
            setAnswerC={setAnswerC}
            setAnswerD={setAnswerD}

            />}
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
		</div>
	);
}

export default App;
