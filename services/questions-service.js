// use the model instead of the hard-coded json file
// const questionsModel = require("../models/questions/questions-model")

// use Dao
const questionsDao = require("../daos/questions-dao")

const findAllQuestions = () => {
    // return questionsModel.find()
    return questionsDao.findAllQuestions()
}

const findQuestionById = (questionId) => {
    // return questionsModel.findById(questionId)
    return questionsDao.findQuestionById(questionId)
}

const findQuestionsForQuiz = (quizId) =>{
    // return questionsModel.find({quizId: quizId})
    return questionsDao.findQuestionsForQuiz(quizId)
}

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
