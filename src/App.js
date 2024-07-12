import React from 'react';
import './App.css';
// Import JS files
import { Routes, Route } from 'react-router-dom';
import Myheader from './components/header';
import Myfooter from './components/footer';

import AppRoutes from './router/router';

function App() {
  return (
    <> <Myheader />
    <Routes>
      <Route path="*" element={<AppRoutes />} />
     
    </Routes>
    <Myfooter /></>
     
  );
}

export default App;