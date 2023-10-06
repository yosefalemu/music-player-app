import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import ForgetPassword from "./Pages/ForgetPassword";
import ResetPassword from "./Pages/ResetPassword";
import MainDisplayPage from "./Pages/MainDisplayPage";
import SingleMusicPage from "./Pages/SingleMusicPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/maindisplay" element={<MainDisplayPage />} />
        <Route path="/singlemusic/:id" element={<SingleMusicPage />} />
      </Routes>
    </Router>
  );
}

export default App;
