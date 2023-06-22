import logo from './logo.svg';
import './App.css';
import {HomePage} from './Component/HomePage'
import LoginPage from './Pages/Login/LoginPage';
import WelcomPage from './Pages/Welcome/WelcomPage';
function App() {
  return (
    <div className="App">
      <WelcomPage />
    </div>
  );
}

export default App;
