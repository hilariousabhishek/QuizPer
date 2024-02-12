import React, { useState, useEffect } from 'react';
import QuizContent from './QuizContent';
import TimeApp from './timer';


const Quiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [score, setScore] = useState(0);
  const [wrongAnswers, setWrongAnswers] = useState([]);
  const [unattemptedQuestions, setUnattemptedQuestions] = useState([]); // New state for unattempted questions
  const [showQuestions, setShowQuestions] = useState(true);
  const [stopTimer, setStopTimer] = useState(false);

  

 
useEffect(() => {
  const fetchData = async () => {
    try {
      // Extract the table name from the route or provide a default value
      const dbName = window.location.pathname.split('/')[1] || 'default_database';
      const tableName = window.location.pathname.split('/')[2] || 'default_table';

      // Dynamically generate the fetch URL based on the table name
      const response = await fetch(`http://localhost:3001/${dbName}/${tableName}`);
      const result = await response.json();
      setQuestions(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

    fetchData();

    //need to use full screen API here

  }, []);

  

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const checkAnswer = () => {
    if (selectedOption === questions[currentIndex].ans) {
      setScore((prevScore) => prevScore + 1);
    } else {
      setWrongAnswers((prevWrongAnswers) => [
        ...prevWrongAnswers, //use of spread operator
        {
          question: questions[currentIndex].question,
          correctAnswer: questions[currentIndex].ans,
          userAnswer: selectedOption,
        },
      ]);
    }
  };

  const nextItem = () => {
    if (selectedOption) {
      checkAnswer();
    } else {
      setUnattemptedQuestions((prevUnattempted) => [
        ...prevUnattempted,
        questions[currentIndex],
      ]);
    }

    setCurrentIndex((prevIndex) => (prevIndex + 1) % questions.length);
    setSelectedOption('');
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + questions.length) % questions.length);
    setSelectedOption('');
  };

  const handleSubmit = () => {
    if (selectedOption) {
      checkAnswer();
    } else {
      setUnattemptedQuestions((prevUnattempted) => [
        ...prevUnattempted,
        questions[currentIndex],
      ]);
    }

    setIsSubmitting(true);
    setShowQuestions(false);
    setStopTimer(true);
  };

  return (
    <div>

      <div className='row'>
        <div className='col-sm-2 text-center'> Ad </div>
        <div className='col-sm-8'>

          <div className="container text-center">
            <h3>previous year question</h3>
            <p style={{ "marginBottom": "20px" }}>Based on latest question asked in SSC JE 2023</p>
          </div>

          {questions.length === 0 ? (
            <div className="container text-center" style={{ marginTop: '10vh' }}>
              <div className="spinner-border text-success" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          ) : (
            <div>


              <TimeApp stopTimer={stopTimer} />
              <QuizContent
                questions={questions}
                currentIndex={currentIndex}
                selectedOption={selectedOption}
                showQuestions={showQuestions}
                handleOptionChange={handleOptionChange}
                nextItem={nextItem}
                prevItem={prevItem}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                score={score}
                wrongAnswers={wrongAnswers}
                unattemptedQuestions={unattemptedQuestions}
              />
            </div>

          )}
        </div>

      
      <div className='col-sm-2 text-center'>Ad</div>
    </div>
  </div>
  );
};

export default Quiz;
