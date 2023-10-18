import HomePage from "./Pages/HomePage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";
import MainDisplayPage from "./Pages/MainDisplayPage";
import SingleMusicPage from "./Pages/SingleMusicPage";
import EmailVerificationPage from "./Pages/EmailVerificationPage";
import AllAlbumsPage from "./Pages/AllAlbumsPage";
import AllTracksPage from "./Pages/AllTracksPage";
import CreateTrackPage from "./Pages/CreateTrackPage";
import CreateAlbumPage from "./Pages/CreateAlbumPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/maindisplay" element={<MainDisplayPage />} />
        <Route path="/singlemusic/:id" element={<SingleMusicPage />} />
        <Route
          path="/:id/verifyemail/:token"
          element={<EmailVerificationPage />}
        />
        <Route path="/allalbums" element={<AllAlbumsPage />} />
        <Route path="/alltracks" element={<AllTracksPage />} />
        <Route path="/createtrack" element={<CreateTrackPage />} />
        <Route path="/createalbum" element={<CreateAlbumPage />} />
      </Routes>
    </Router>
  );
}

export default App;
