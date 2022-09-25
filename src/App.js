import { useOutlet } from 'react-router-dom';
import './App.scss';
import { FilmProvider } from './context/FilmContext';

function App() {
  const pages = useOutlet()

  return (
    <FilmProvider>
      <div className="App">
        { pages }
      </div>
    </FilmProvider>
  );
}

export default App;
