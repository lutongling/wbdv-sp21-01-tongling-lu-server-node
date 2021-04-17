const mongoose = require('mongoose')
const questionSchema = require('../questions/questions-schema')

const quizAttempts = mongoose.Schema({
     score: Number,
     quiz: {type: String, ref: 'QuizModel'},
     correct: String,
     answers: [questionSchema]
 }, {collection: 'quizAttempts'})

module.exports = quizAttempts