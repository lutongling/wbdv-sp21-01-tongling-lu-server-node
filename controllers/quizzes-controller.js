const quizzesService = require("../services/quiz-service")

module.exports = (app) => {
    const findAllQuizzes = (req, res) => {
        quizzesService.findAllQuizzes()
            .then((quizzes) => {
                res.send(quizzes)
            })
    }

    const findQuizById = (req, res) => {
        const quizId = req.params['qzid']
        quizzesService.findQuizById(quizId)
            .then((quiz) => {
                res.send(quiz)
            })
    }

    app.get('/api/quizzes', findAllQuizzes)
    app.get('/api/quizzes/:qzid', findQuizById)
}