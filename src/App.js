import logo from './logo.svg';
import './App.css';
import {MovieProvider} from './MovieContext'
import MovieList from './MovieList'
import AddMovies from './AddMovies'

function App() {
  return (
    <MovieProvider>
    <div className="App">
      <AddMovies/>
     <MovieList/>
    </div>
    </MovieProvider>
  );
}

export default App;
