
import './App.css';
import Navigationbar from './components/Navbar';
import Router from './components/Router';

function App() {
  return (
    <div className="App container-fluid">
      <Navigationbar></Navigationbar>
      <Router></Router>
    </div>
  );
}

export default App;
