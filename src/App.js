import { SpeedInsights } from '@vercel/speed-insights/react';
import { Analytics } from '@vercel/analytics/react';
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
        <Route path='/:dbName/:attemptLink' element={<Quiz/>} />
        <Route path='/QuizResult' element={<QuizResult />} />
        <Route path="*" element= {<Error/>} />
        {RRBRoute} { SSCRoute }
        
      </Routes>
      <Analytics />
      <SpeedInsights />
    </div>
  );
}

export default App;
