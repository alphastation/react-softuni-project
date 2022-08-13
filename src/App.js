
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar.jsx';

import Dashboard from './pages/Dashboard.jsx';
import ForgotPassword from './pages/ForgotPassword.jsx';
import Offers from './pages/Offers.jsx';
import Profile from './pages/Profile.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </Routes>
        <Navbar />
      </Router>

      {/* <h1>Hellow from my App!!!</h1> */}
      <ToastContainer />
    </>
  );
}

export default App;
