const questionsService = require("../services/questions-service")

module.exports = (app) => {
    const findAllQuestions = (req, res) => {
        // const questions = questionsService.findAllQuestions()
        // res.send(questions)
        questionsService.findAllQuestions()
            .then((questions) => {
                res.send(questions)
            })
    }

    const findQuestionById = (req, res) => {
        const qid = req.params['qid']
        questionsService.findQuestionById(qid)
            .then((question) => {
                res.send(question)
            })
    }

    const findQuestionsForQuiz = (req, res) => {
        const quizId = req.params.qzid;
        // const questions = questionsService.findQuestionsForQuiz(quizId);
        // res.send(questions)
        questionsService.findQuestionsForQuiz(quizId)
            .then((questions) => {
                res.send(questions)
            })
    }


    app.get('/api/questions', findAllQuestions)
    app.get('/api/questions/:qid', findQuestionById)
    app.get('/api/quizzes/:qzid/questions', findQuestionsForQuiz)

}