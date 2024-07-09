import './App.css';
import { BrowserRouter as Router, Route, Switch, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Pages from './components/Pages';
import Projects from './components/Projects';
import Blog from './components/Blog';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/pages' element={<Pages />} />
        <Route path='/projects' element={<Projects/>} />
        <Route path='/blogs' element={<Blog/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
