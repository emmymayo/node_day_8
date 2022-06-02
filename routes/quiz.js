var express = require('express');
var router = express.Router();

/* GET quizs listing. */
router.get('/', async (req, res, next)=> {
    const db = req.app.get('db');

    let quiz = await db.quiz.findAll({
        include: db.answer
    });

    res.setHeader("Content-Type", "application/json");
    res.statusCode = 200;

    res.send({
        quiz: quiz
    });
});

module.exports = router;