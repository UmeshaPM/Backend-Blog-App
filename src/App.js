import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navigation from './Components/Navigation';
import SiteName from './Components/SiteName';
import Tourism from './Pages/Tourism';
import Food from './Pages/Food';
import Fitness from './Pages/Fitness';
import Home from './Pages/Home';
import Sandelwood from './Pages/Sandelwood';
import StoredData from './Pages/StoredData';
import Technology from './Pages/Technology';
import './Pages/style.css';
import SeparateArticalView from './Components/SeparateArticalView';
import './Components/SeparateArticalView.css';

function App() {
  return (
    <>
      <SiteName />
      <StoredData>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Sandelwood' element={<Sandelwood />} />
            <Route path='/Technology' element={<Technology />} />
            <Route path='/Fitness' element={<Fitness />} />
            <Route path='/Food' element={<Food />} />
            <Route path='/Tourism' element={<Tourism />} />
            <Route path='/:catagory/:id' element={<SeparateArticalView />} />
          </Routes>
        </BrowserRouter>
      </StoredData>
    </>
  );
}

export default App;
