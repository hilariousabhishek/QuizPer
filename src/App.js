//import statements
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//import components
import Home from './components/home/Home.jsx';
import Quiz from './components/quiz/Quiz';
import QuizResult from './components/quiz/QuizResult.jsx';
import Error from './components/Error.jsx';

import { RRBRoute, SSCRoute } from './components/show/Show.jsx';

function App() {
  return (
    <div className='container-fluid'>
  
      <Routes basename = "/">

        <Route path='/' element={<Home />} />
        <Route path='/Quiz/:dbName/:attemptLink' element={<Quiz/>} />
        <Route path='/QuizResult' element={<QuizResult />} />
        <Route path="*" element= {<Error/>} />
        {RRBRoute} { SSCRoute }
        
      </Routes>
    </div>
  );
}

export default App;
