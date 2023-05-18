import './App.css';
import Landing from './components/Landing';
import MovieDetails from './components/MovieDetails';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/MovieDetails" element={<MovieDetails />} />
    </Routes>
   
    </div>
        </BrowserRouter>
  );
}

export default App;
