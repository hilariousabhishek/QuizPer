//import statements
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//header and footer
import Navbar from './components/section/navbar';
import Footer from './components/section/footer'; 

//import components
import Home from './components/home/Home.jsx';
import Quiz from './components/quiz/Quiz';
import QuizResult from './components/quiz/QuizResult.jsx';

import { RRBRoute, SSCRoute } from './components/show/Show.jsx';

function App() {
  return (
    <div className='container-fluid'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/quiz' element={<Quiz/>} />
        <Route path='/QuizResult' element={<QuizResult />} />

        { RRBRoute} { SSCRoute }
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
