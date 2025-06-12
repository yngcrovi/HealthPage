import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SportPage from './Route/SportPage/SportPage';
import Registration from './Route/Account/Registration/Registration';
import LogIn from './Route/Account/Login/Login'
import Settings from './Route/Account/Settings/Settings';
import Profile from './Route/Account/Profile/Profil';
import "./index.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <Routes>
    <Route path="/sport" element={<SportPage />} />
    <Route path="/registration" element={<Registration />} />
    <Route path="/login" element={<LogIn />} />
    <Route path="/settings" element={<Settings />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  </BrowserRouter>
)
