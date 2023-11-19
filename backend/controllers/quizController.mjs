import * as Factory from './handlerFactory.mjs';
import Quiz from '../models/quizModel.mjs';

export const createQuiz = Factory.createOne(Quiz);
export const getAllQuizes = Factory.getAll(Quiz);
export const getQuiz = Factory.getOne(Quiz);
export const updateQuiz = Factory.updateOne(Quiz);
export const deleteQuiz = Factory.deleteOne(Quiz);
