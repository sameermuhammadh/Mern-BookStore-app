import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ErrorBoundary from './components/ErrorBoundary'
import CreateBook from './pages/CreateBook';
import ShowBook from './pages/ShowBook';
import EditBook from './pages/EditBook';
import DeleteBook from './pages/DeleteBook';

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/books/create' element={<ErrorBoundary>
      <CreateBook/>
  </ErrorBoundary>} />
    <Route path='/books/details/:id' element={<ErrorBoundary>
    <ShowBook />
  </ErrorBoundary>} />
    <Route path='/books/edit/:id' element={<EditBook />} />
    <Route path='/books/delete/:id' element={<DeleteBook />} />
   </Routes>
  );
};

export default App;
