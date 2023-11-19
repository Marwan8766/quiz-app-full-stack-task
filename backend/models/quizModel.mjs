import mongoose from 'mongoose';

const quizSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Name is required'],
    },
    type: {
      type: String,
      enum: ['quiz', 'assignment'],
      required: [true, 'Type is required'],
    },
    course: {
      type: String,
      required: [true, 'Course is required'],
    },
    topic: {
      type: String,
      required: [true, 'Topic is required'],
    },
    dueTo: {
      type: Date,
      required: [true, 'DueTo date is required'],
    },
  },
  {
    timestamps: true,
  }
);

const Quiz = mongoose.model('Quiz', quizSchema);
export default Quiz;
