// use the model instead of the hard-coded json file
// const quizzes = require("./quizzes.json")

// use the model instead of the hard-coded json file
// const quizzesModel = require("../models/quizzes/quizzes-model")

const quizzesDao = require("../daos/quizzes-dao")

const findAllQuizzes = () => {
    // return quizzesModel.find()
    return quizzesDao.findAllQuizzes()
}

const findQuizById = (qzid) => {
    return quizzesDao.findQuizById(qzid)
    // return quizzesModel
    //     .findById(qzid)
    //     .populate("questions")
    //     .exec()
}

module.exports = {
    findAllQuizzes,
    findQuizById
}
