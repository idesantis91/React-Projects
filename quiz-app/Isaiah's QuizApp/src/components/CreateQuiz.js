import React, { useState } from 'react';
import axios from 'axios';
//File Writing 
const fs = require('fs');
const path = require('path');
const reactDocs = require("react-docgen");
const componentFolder = "./src/components/";
const componentJsonPath = "./docs/components.json";

//Question Array
const questionDataArray = [];

function createComponentFile() {
	console.log(questionDataArray);
	const componentJsonArray = JSON.stringify(questionDataArray, null, 2);
	fs.writeFile(componentJsonPath, componentJsonArray, "utf8", (err, data) => {
	  if (err) {
		throw err;
	  }
	  console.log("Created component file");
	});
  }
  
  const[array,setArray]= useState([{
	"questionText": "",
		"answerOptions": [
			{ "answerText": "", "isCorrect": false },
			{ "answerText": "", "isCorrect": false },
			{ "answerText": "", "isCorrect": true },
			{ "answerText": "", "isCorrect": false      }
		]
	}
])

const CreateQuiz = ({currentQuestion, 
	setCurrentQuestion, 
	showScore, 
	setShowScore, 
	score, setScore, 
	quizTitle, 
	setQuizTitle,
	createQuestion,
	setCreateQuestion,
	answerA,
	setAnswerA,
	answerB,
	setAnswerB,
	answerC,
	setAnswerC,
	answerD,
	setAnswerD
	}) => { 
	const questions = [
		{
			questionText: <input type="text"
											className = "questionField"
											placeholder = "ENTER YOUR QUESTION HERE"
											name = 'questionCreation_1'
											/>,
			answerOptions: [
				{ answerText: <input type="text"
												id="answer"
												name="answer"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
			],
		},
		{
			questionText: <input type="text"
											className = "questionField"
											placeholder = "ENTER YOUR QUESTION HERE"
											name = 'questionCreation_1'
											/>,
			answerOptions: [
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
			],
		},
		{
			questionText: <input type="text"
											className = "questionField"
											placeholder = "ENTER YOUR QUESTION HERE"
											name = 'questionCreation_1'
											/>,
			answerOptions: [
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
			],
		},
		{
			questionText: <input type="text"
											className = "questionField"
											placeholder = "ENTER YOUR QUESTION HERE"
											name = 'questionCreation_1'
											/>,
			answerOptions: [
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
				{ answerText: <input type="text"
												className = "answerField"
												placeholder = "ENTER YOUR ANSWER HERE"
												name = 'answerCreation_1'
												/>, isCorrect: false },
			],
		},
	];

	const handleAnswerOptionClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}
		const nextQuestion = currentQuestion + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestion(nextQuestion);
		} else {
			setShowScore(true);
		}
	};
	const [count, setCount] = useState(1);
	function saveText(question, answer1, answer2, answer3, answer4, filename){
  var a = document.createElement('a');
  a.setAttribute('href', 'data:text/plain;charset=utf-8,'

	//Save File Layout
		+encodeURIComponent(question)
		+encodeURIComponent("\n")
		+encodeURIComponent(answer1)
		+encodeURIComponent("\n")
		+encodeURIComponent(answer2)
		+encodeURIComponent("\n")
		+encodeURIComponent(answer3)
		+encodeURIComponent("\n")
		+encodeURIComponent(answer4));
  a.setAttribute('download', filename);
  a.click()
}
	//Next Question onClick
	function nextQuestionClear() {
		//Saves all text field inputs
			saveText( JSON.stringify(document.getElementById('questionText').value),
			JSON.stringify(document.getElementById('answerTextField').value),
			JSON.stringify(document.getElementById('answerTextField2').value),
			JSON.stringify(document.getElementById('answerTextField3').value),
			JSON.stringify(document.getElementById('answerTextField4').value),
			 "Question.json" );

			 //Changes the Question Count and Clears Text Fields
			document.getElementById('questionText').value = '';
			document.getElementById('answerTextField').value = '';
			document.getElementById('answerTextField2').value = '';
			document.getElementById('answerTextField3').value = '';
			document.getElementById('answerTextField4').value = '';
			setCount(count + 1);
	  }

	//Function that will refresh the page
	function refreshPage() {
    setTimeout(()=>{
      window.location.reload(false);
    }, 500);
}
	//Save and Quit onClick
	function saveAndQuitFunctionality(){
		//Window popup
		if (window.confirm('Are you sure you wish to quit? All progress will be saved.'))
							alert ('Your progress has been saved!')

		//Saves all text field inputs
		saveText( JSON.stringify(document.getElementById('questionText').value),
		JSON.stringify(document.getElementById('answerTextField').value),
		JSON.stringify(document.getElementById('answerTextField2').value),
		JSON.stringify(document.getElementById('answerTextField3').value),
		JSON.stringify(document.getElementById('answerTextField4').value),
		JSON.stringify(document.getElementById('quizTitle').value),
		 "FinalQuestion.json");

		//Then Quits (Resets the Quiz)
		 refreshPage();
	}
	

	//setState Functions 
	const quizTitleHandler = event =>{
		setQuizTitle(event.target.value);
	}
	const questionHandler = event =>{
		setCreateQuestion(event.target.value);
	}
	const answerAHandler = event =>{
		setAnswerA(event.target.value);
	}
	const answerBHandler = event =>{
		setAnswerB(event.target.value);
	}
	const answerCHandler = event =>{
		setAnswerC(event.target.value);
	}
	const answerDHandler = event =>{
		setAnswerD(event.target.value);
	}

	//Resets States
	const initialCreateQuestion = () => setCreateQuestion('');
	const initialAnswerA = () => setAnswerA('');
	const initialAnswerB = () => setAnswerB('');
	const initialAnswerC = () => setAnswerC('');
	const initialAnswerD = () => setAnswerD('');
	
	
	//NextQuestion Button
	function nextButton(){
		/* Holds Create Quiz States */
		const createQuizState ={
			"quizTitle": quizTitle,
			"question": createQuestion,
			"answerA": answerA,
			"answerB": answerB,
			"answerC": answerC,
			"answerD": answerD
		}
		//Sends data to MongoDB
		axios.post('http://localhost:4000/app/createquiz', createQuizState)
			.then(response => console.log(response.data))
		console.log("Data Sent Successfully!")

		//Changes the Question Count and Clears Text Fields
		initialCreateQuestion()
		initialAnswerA()
		initialAnswerB()
		initialAnswerC()
		initialAnswerD()
		setCount(count + 1);
	}

	return (

		<div className='create-quiz'>

			{showScore ? (
				<div className='score-section'>
					You scored {score} out of {questions.length}
				</div>
			) : (
				<>
					<div className='question-section'>

						<div className='question-count'>
							<span>Question {count}</span>
						</div>
						<div className='question-text'>
						<textarea
								type="text"
								wrap="hard"
								maxLength = "200"
							    className = "questionField"
							    placeholder = "ENTER YOUR QUESTION HERE"
								id = "questionText"
								onChange={e => setCreateQuestion(e.target.value)}
								value={createQuestion}
							    name = 'questionCreation_1'
							/>,
						</div>
					</div>
					{/* QuizTitle Input */}
					<input type="text"
						   placeholder = "ENTER A TITLE FOR YOUR QUIZ"
						   className = "quizTitleClass"
						   name = 'quizTitleName'
							 id = "quizTitle"
							 onChange={e => setQuizTitle(e.target.value)}
							 value={quizTitle}

					/>
					<div className = "quizTitleLabelClass">
						<span>Quiz Title:</span>
					</div>

					{/* Next Button */}	   
					<input type="button"
						   value = "Next Question"
						   className = "nextQuestionButton"
						   placeholder = "Next Question"
						   name = 'nextquestionbutton'
							onClick ={nextButton}


					/>
					{/* AnswerA Input */}
					<div className='answer-section'>
					<input type="text"
						   id="answerTextField"
						   name="answer"
						   className = "answerField"
						   placeholder = "ENTER YOUR ANSWER HERE"
						   onChange={answerAHandler}
						   value={answerA}
						/>

						<input type="radio"
							id="1"
							className='checkBox1'
							name="correctChecker"
							/>
					{/* AnswerB Input */}
					<input type="text"
						   className = "answerField"
						   placeholder = "ENTER YOUR ANSWER HERE"
						   id = "answerTextField2"
						   name = 'answerCreation_1'
						   onChange={answerBHandler}
						   value={answerB}


						/>

						<input type="radio"
							id="2"
							className='checkBox2'
							name="correctChecker"
							/>
					{/* AnswerC Input */}
					<input type="text"
						   className = "answerField"
						   placeholder = "ENTER YOUR ANSWER HERE"
						   name = 'answerCreation_1'
						   id = "answerTextField3"
						   onChange={answerCHandler}
						   value={answerC}

						/>

						<input type="radio"
							id="3"
							className='checkBox3'
							name="correctChecker"
							/>
					{/* AnswerD Input */}
					<input type="text"
						   className = "answerField"
						   placeholder = "ENTER YOUR ANSWER HERE"
						   name = 'answerCreation_1'
						   id = "answerTextField4"
						   onChange={answerDHandler}
						   value={answerD}
						/>

						<input type="radio"
							id="4"
							className='checkBox4'
							name="correctChecker"
							/>
					{/* Save and Quit Button */}
					<input type="button"
						   value = "Save and Quit"
							 to = "/PlayQuiz"
						   className = "save"
						   name = 'saveButton'
							 onClick ={saveAndQuitFunctionality}
					/>
					</div>
				</>
			)}
		</div>

	);
}

export default CreateQuiz;
