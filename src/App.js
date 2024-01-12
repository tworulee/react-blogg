import TopBar from "./components/topBar/TopBar";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from './pages/homepage/HomePage';
import Single from './pages/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/login/Login';


function App() {
  const currentUser = true;
  return (
    <Router>
    <TopBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/posts" element={<HomePage />} />
      <Route
        path="/register"
        element={currentUser ? <Navigate to="/" /> : <Register />}
      />
      <Route
        path="/login"
        element={currentUser ? <Navigate to="/" /> : <Login />}
      />
      <Route path="/post/:id" element={<Single />} />
      <Route
        path="/write"
        element={currentUser ? <Write /> : <Navigate to="/login" />}
      />
      <Route
        path="/settings"
        element={currentUser ? <Settings /> : <Navigate to="/login" />}
      />
    </Routes>
  </Router>
  );
}

export default App;
