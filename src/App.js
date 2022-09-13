import { useState } from "react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Homepage from "./Components/Homepage";
import Login from "./Components/Login";
import Navbar from "./Components/Navbar";
import News from "./Components/News";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = (email, password) => {
    if(email==="test@gmail.com" && password==="12345678") {
      setIsLoggedIn(true);
      console.log("logged in");
      return true;
    }
    return false;
  }

  const handleLogout = () => setIsLoggedIn(false);

  return (
    <BrowserRouter>
    <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login isLoggedIn={isLoggedIn} handleLogin={handleLogin} />} />
      <Route path="/news" element={<News isLoggedIn={isLoggedIn} />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
