import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from './HomePage.jsx';
import { SignUp } from './components/signup/SignUp.jsx';
import { Login } from './components/login/Login.jsx';
import { getAuth } from "firebase/auth";

function App() {
  const auth = getAuth();
  const user = auth.currentUser;
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={user !== null ? <HomePage /> : <Navigate replace to="/login" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
