import logo from './logo.svg';
import './App.css';
import {HomePage} from './Component/HomePage'
import LoginPage from './Pages/Login/LoginPage';
import WelcomPage from './Pages/Welcome/WelcomPage';
import Reservation from './Pages/Reservation/Reservation';
import MyReservation from './Pages/Reservation/MyReservation';
import RegisterPage from './Pages/Register/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/"  element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />}  />
          <Route path="/reservation" element={<Reservation />} />
          <Route path="/welecome" element={<WelcomPage />} />
          <Route path="/myreservation" element={<MyReservation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
