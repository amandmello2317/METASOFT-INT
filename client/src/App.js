import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import './App.css';
import FeedBack from './Components/FeedBAck/FeedBack';
import ViewFeedback from './Components/ViewFeedBack/ViewFeedback';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AdminLogin from "./Components/Admin/Login/AdminLogin";
import AdminDashBoad from "./Components/Admin/Dashboad/AdminDashBoad";
import { useEffect, useState } from "react";

function App() {
  const [auth, setAuth] = useState()
  const [trig,setTrig] = useState(false)
 
  useEffect(() => {
    setAuth(JSON.parse(localStorage.getItem("token")));
  },[trig])

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/* Redirect / to FeedBack component */}
          <Route path="/" element={<FeedBack />} />

          {/* Redirect /admin/login to /admin if auth is true */}
          <Route
            path="/login"
            element={auth ? <Navigate to="/admin" /> : <AdminLogin setTrig={setTrig} trig={trig}/>}
          />

          {/* Redirect /admin to AdminDashBoad if auth is true, otherwise redirect to /admin/login */}
          <Route
            path="/admin"
            element={auth ? <AdminDashBoad  setTrig={setTrig} trig={trig}/> : <Navigate to="/login" />}
          />

          {/* Redirect any other route to FeedBack component */}
          <Route path="*" element={<FeedBack />} />
        </Routes>
        <ToastContainer />
      </BrowserRouter>
    </div>
  );
}

export default App;

