import './App.css';
import { Outlet } from 'react-router-dom';
import { Nav } from './components/Nav';

function App() {
  return (
    <div className="App">
      <Nav/>
      <div className="home">
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
