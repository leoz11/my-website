import './App.css';

import { useState, useEffect } from 'react';

import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Pages
import Projects from './pages/Projects/Projects';
import Home from './pages/Home/Home';

//Hooks

//Components
import Navbar from './components/Navbar';
import CircleLoader from './components/CircleLoader';


function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);




  return (
    <div className="App">
      {
        loading ? (
        <CircleLoader />

        ):(
      
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </BrowserRouter>
      )}
    </div>
  );
}

export default App;
