import express from 'express';
import * as quizController from '../controllers/quizController.mjs';

const router = express.Router();

router
  .route('/')
  .post(quizController.createQuiz)
  .get(quizController.getAllQuizes);

router
  .route('/:id')
  .get(quizController.getQuiz)
  .patch(quizController.updateQuiz)
  .delete(quizController.deleteQuiz);

export default router;
