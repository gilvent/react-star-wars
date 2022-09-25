import { useOutlet } from 'react-router-dom';
import './App.css';

function App() {
  const pages = useOutlet()
  
  return (
    <div className="App">
      { pages }
    </div>
  );
}

export default App;
