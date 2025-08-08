import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Test from './pages/Test';
import Search from './pages/Search';
import LessonDetail from './pages/LessonDetail';

function App() {
  return (
    <Router basename='/Yeu_Ngon_Ngu'>
      <Header />
      <div className="container mx-auto p-4 mt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/test" element={<Test />} />
          <Route path="/search" element={<Search />} />
          <Route path="/lesson/:id" element={<LessonDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;