import React from 'react';

const QuizForm = ({ currentIndex, questions, selectedOption, handleOptionChange }) => (
  <form>
    <p>Q{currentIndex + 1}. {questions[currentIndex].question}</p>

    {questions[currentIndex].q_img && (
      <img src={`data:image/${questions[currentIndex].q_img_type};base64,${questions[currentIndex].q_img}`} alt={`Q${currentIndex + 1} Image`} style={{ maxWidth: '200px',maxHeight:'200px' }} />
    )}

    
    <p style={{ margin: '20px' }}>{questions[currentIndex].q_value}</p>

    {['A', 'B', 'C', 'D'].map((optionKey) => (
      <div key={optionKey}>
        <input
          type="radio"
          id={`option${optionKey}`}
          name={`question-${questions[currentIndex].qid}`}
          value={optionKey}
          checked={selectedOption === optionKey}
          onChange={handleOptionChange}
        />
        <label htmlFor={`option${optionKey}`}>
          {optionKey}. 
          {questions[currentIndex][`${optionKey.toLowerCase()}_img`] && (
            <img
              src={`data:image/${questions[currentIndex][`${optionKey.toLowerCase()}_img_type`]};base64,${questions[currentIndex][`${optionKey.toLowerCase()}_img`]}` }
              alt={`${optionKey} Option`}
              style={{ maxWidth: '200px',maxHeight:'200px' }}
            />
          )}
          {questions[currentIndex][optionKey.toLowerCase()]}
        </label>
      </div>
    ))}
  </form>
);

export default QuizForm;
