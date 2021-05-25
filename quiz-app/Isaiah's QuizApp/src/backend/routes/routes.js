const express = require('express')
const router = express.Router()
const QuizTemplateCopy = require('../models/QuizModel');
router.post('/createquiz', (request, response) =>{
    const createQuiz = new QuizTemplateCopy({
        quizTitle: request.body.quizTitle,
        question: request.body.question,
        answerA: request.body.answerA,
        answerB: request.body.answerB,
        answerC: request.body.answerC,
        answerD: request.body.answerD
    })
    createQuiz.save()
    .then(data => {
        response.json(data)
    })
    .catch(data =>{
        response.json(error)
    })
})

module.exports = router;

