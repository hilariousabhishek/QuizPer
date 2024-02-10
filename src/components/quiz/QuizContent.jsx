// QuizContent.jsx
import React from 'react';
import QuizForm from './QuizForm';
import QuizResult from './QuizResult';

const QuizContent = ({
  questions,
  currentIndex,
  selectedOption,
  showQuestions,
  handleOptionChange,
  nextItem,
  prevItem,
  handleSubmit,
  isSubmitting,
  score,
  wrongAnswers,
  unattemptedQuestions,
}) => (
  <div>
    {showQuestions && (
      <QuizForm
        currentIndex={currentIndex}
        questions={questions}
        selectedOption={selectedOption}
        handleOptionChange={handleOptionChange}
      />
    )}

    {showQuestions && (
      <div>
        <Button onClick={prevItem} label="Prev" visibility={currentIndex === 0 ? 'hidden' : 'visible'} />
        {currentIndex < questions.length - 1 && (
          <Button onClick={nextItem} label="Next" className="fr" />
        )}
        {currentIndex === questions.length - 1 && (
          <Button onClick={handleSubmit} label="Submit" className={`fr ${isSubmitting ? 'hide' : ''}`} />
        )}
      </div>
    )}

    {isSubmitting && (
      <QuizResult score={score} wrongAnswers={wrongAnswers} questions={questions} unattemptedQuestions={unattemptedQuestions} />
    )}
  </div>
);

const Button = ({ onClick, label, visibility, className }) => (
  <button
    type="button"
    onClick={onClick}
    style={{ visibility }}
    className={`mybtn ${className}`}
  >
    {label}
  </button>
);

export default QuizContent;
