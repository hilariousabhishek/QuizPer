import React, { useRef } from "react";
import html2pdf from "html2pdf.js";
import Chart from 'react-apexcharts';

const QuizResult = ({ score, wrongAnswers, questions, unattemptedQuestions }) => {
  const resultRef = useRef();

  const handleDownloadPDF = () => {
    const resultContent = resultRef.current;

    const pdfOptions = {
      margin: 10,
      filename: "quizPre_result.pdf",
      image: { type: "jpeg", quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
    };

    html2pdf(resultContent, pdfOptions);
  };

  const options = {
    labels: ['wrong', 'correct', 'unattempted'],
    colors: ['#FF6384', '#36A2EB', '#FFCE56'],
  };

  const series = [wrongAnswers.length, score, unattemptedQuestions.length];

  const correctAttempts = questions
    .filter((question, index) => !wrongAnswers.some(wrongAnswer => wrongAnswer.question === question.question) && !unattemptedQuestions.some(unattemptedQuestion => unattemptedQuestion.question === question.question));

  return (
    <div ref={resultRef}>

      <div className="scorecard">
        <h4>
          <p>Correct: {score}</p>
          <p>Incorrect: {wrongAnswers.length}</p>
          <p>Unattempted: {unattemptedQuestions.length}</p>
        </h4>

        <Chart options={options} series={series} type="donut" height={350} />
      </div>

      <div className="completeAnalysis">
        <button type="button" className="btn btn-outline-success" onClick={handleDownloadPDF}>
          Download
        </button>

        {correctAttempts.length > 0 && (
          <div className="correctAttempts">
            <h3 style={{ textAlign: 'center' }}>Correct</h3>
            <hr />
            <ul>
              {correctAttempts.map((question) => (
                <li key={question.id}>
                  {`Q${question.qid}. ${question.question}`}
                    <br />
                    {question.q_value !== null && (
                      <span>{`${question.q_value} `}</span>
                    )}

                  {question.q_img && (
                    <div>
                      <img src={`data:image;base64,${question.q_img}`} alt={`Question ${question.qid}`}   style={{ maxWidth: '100px',maxHeight:'100px' }} />
                    </div>
                  )}

                  {["A", "B", "C", "D"].map((optionKey) => (
                    <div key={optionKey}>
                      <input
                        type="radio"
                        disabled
                        checked={question.ans === optionKey}
                      />
                      <label className="resCol">
                        {optionKey}. { }
                        {question[`${optionKey.toLowerCase()}_img`] && (
                          <img src={`data:image;base64,${question[`${optionKey.toLowerCase()}_img`]}`} alt={`Option ${optionKey}`}
                              style={{ maxWidth: '100px',maxHeight:'100px' }} />
                        )}
                        {question[`${optionKey.toLowerCase()}`]}
                      </label>
                    </div>
                  ))}
                </li>
              ))}
            </ul>
          </div>
        )}


        {wrongAnswers.length > 0 && (
          <div>
            <h3 style={{ textAlign: 'center' }}>Incorrect</h3>
            <hr />
            <ul className="wrongAnswer">
              {wrongAnswers.map((wrongAnswer) => {
                const question = questions.find(q => q.question === wrongAnswer.question);
                const correctAnswer = question.ans;

                return (
                  <li key={question.id} className="wrong">
                    {`Q${question.qid}. ${question.question}`}
                      <br />
                      {question.q_value !== null && (
                        <span>{`${question.q_value} `}</span>
                      )}
                    <br />

                    {question.q_img && (
                      <div>
                        <img src={`data:image;base64,${question.q_img}`} alt={`Question ${question.qid}`}   style={{ maxWidth: '100px',maxHeight:'100px' }} />
                      </div>
                    )}

                    {["A", "B", "C", "D"].map((optionKey) => (
                      <div key={optionKey}>
                        <input
                          type="radio"
                          disabled
                          checked={wrongAnswer.userAnswer === optionKey}
                        />
                        <label className="resCol">
                          {optionKey}.{" "}
                          {question[`${optionKey.toLowerCase()}_img`] && (
                            <img src={`data:image;base64,${question[`${optionKey.toLowerCase()}_img`]}`} alt={`Option ${optionKey}`}   style={{ maxWidth: '100px',maxHeight:'100px' }} />
                          )}
                          {question[`${optionKey.toLowerCase()}`]}
                        </label>
                      </div>
                    ))}
                    {`Correct Answer: ${correctAnswer}`}
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        {unattemptedQuestions.length > 0 && (
          <div>
            <h3 style={{ textAlign: 'center' }}>Unattempted</h3>
            <hr />
            <ul className="unattemptedQuestions">
              {unattemptedQuestions.map((unattemptedQuestion) => {
                const question = questions.find(q => q.question === unattemptedQuestion.question);
                const correctAnswer = question.ans;

                return (
                  <li key={question.id} className="Un">
                    {`Q${question.qid}. ${question.question}`}
                      <br />
                      {question.q_value !== null && (
                        <span>{`${question.q_value} `}</span>
                      )}
                    <br />

                    {question.q_img && (
                      <div>
                        <img src={`data:image;base64,${question.q_img}`} alt={`Question ${question.qid}`}   style={{ maxWidth: '100px',maxHeight:'100px' }} />
                      </div>
                    )}

                    {["A", "B", "C", "D"].map((optionKey) => (
                      <div key={optionKey}>
                        <input
                          type="radio"
                          disabled
                        />
                        <label className="resCol">
                          {optionKey}.{" "}
                          {question[`${optionKey.toLowerCase()}_img`] && (
                            <img src={`data:image;base64,${question[`${optionKey.toLowerCase()}_img`]}`} alt={`Option ${optionKey}`}   style={{ maxWidth: '100px',maxHeight:'100px' }} />
                          )}
                          {question[`${optionKey.toLowerCase()}`]}
                        </label>
                      </div>
                    ))}
                    {`Correct Answer: ${correctAnswer}`}
                    <hr />
                  </li>
                );
              })}
            </ul>
          </div>
        )}

      </div>
    </div>
  );
};

export default QuizResult;