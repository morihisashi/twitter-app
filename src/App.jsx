import { Routes, Route } from 'react-router-dom';
import { HomePage } from './HomePage.jsx';
import { SignUp } from './components/signup/SignUp.jsx';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
