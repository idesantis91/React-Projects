const mongoose = require('mongoose');

const QuizTemplate = new mongoose.Schema({
    quizTitle:{
        type: String,
        required: true,
    },
    
    question:{
        type:String,
        required: true,
    },
    //isCorrect determines if the question is correct
    answerA:{
        type:String,
        required: true,
        isCorrect: {type:Boolean, default: false}
    },
    answerB:{
        type:String,
        required: true,
        isCorrect: {type:Boolean, default: false}
    },
    answerC:{
        type:String,
        required: true,
        isCorrect: {type:Boolean, default: false} 
    },
    answerD:{
        type:String,
        required: true,
        isCorrect: {type:Boolean, default: false}
    },
    
})

module.exports = mongoose.model('myQuizTable', QuizTemplate);