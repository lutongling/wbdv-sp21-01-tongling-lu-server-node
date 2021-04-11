// hard coded data from local json file
const questions = require("./questions.json")

// for A8
// const createQuestion = () => {}
// const createQuestionForQuiz = (quizId) => {}

const findAllQuestions = () => {
    return questions
}

const findQuestionById = (questionId) => {
    questions.find((question) => question._id === questionId)
}

const findQuestionsForQuiz = (quizId) =>
    questions.filter(question => question.quizId === quizId)

module.exports = {
    findAllQuestions,
    findQuestionById,
    findQuestionsForQuiz
}
