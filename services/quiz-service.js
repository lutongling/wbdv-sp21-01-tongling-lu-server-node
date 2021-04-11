// hard coded data from local json file
const quizzes = require("./quizzes.json")

// for assignment 8
// const createQuiz = () => {
//
// }

const findAllQuizzes = () => {
    return quizzes
}

const findQuizById = (qzid) => {
    return quizzes.find((quiz) => {
        return (quiz._id === qzid)
    })
}

// for assignment 8
// const updateQuiz = () => {
// }
// const deleteQuiz = () => {
// }

module.exports = {
    findAllQuizzes,
    findQuizById
}
