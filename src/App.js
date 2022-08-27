import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Movie from './views/Movie';
import Edit from './views/Edit';
import New from './views/New';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <h1>Movies app</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/movie/:id" element={<Movie />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
