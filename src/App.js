import logo from './logo.svg';
import './App.css';
import {HomePage} from './Component/HomePage'
import LoginPage from './Pages/Login/LoginPage';
import WelcomPage from './Pages/Welcome/WelcomPage';
import Reservation from './Pages/Reservation/Reservation';
function App() {
  return (
    <div className="App">
      <Reservation />
    </div>
  );
}

export default App;
