import { Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom';
import { HomePage } from './HomePage.jsx';
import { SignUp } from './components/signup/SignUp.jsx';
import { Login } from './components/login/Login.jsx';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useState, useEffect } from 'react';

function App() {
  const [userName, setUserName] = useState('');
  const location = useLocation();
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserName(user.displayName);
        console.log(userName);
      }
    })
  }, [location])

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={userName !== '' ? <HomePage /> : <Navigate replace to="/login" />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
