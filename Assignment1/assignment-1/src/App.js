import { Routes, Route } from "react-router-dom";
import BookManager from "./BookManagement/BookManager";
import { useState } from "react";
import Login from "./Authentication/Login";
import AdminDashboard from "./Dashboard/AdminDashboard";
import LandingPage from "./LandingPage/Landingpage";
import AddBook from "./BookManagement/AddBook";

function App() {
  let [isAuthenticated, SetIsAuthenticated] = useState(JSON.parse(localStorage.getItem("isLoggedIn")));

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage isAuthenticated={isAuthenticated} SetIsAuthenticated={SetIsAuthenticated}/>} />
        <Route path="/manage-books" element={<BookManager isAuthenticated={isAuthenticated} SetIsAuthenticated={SetIsAuthenticated}/>} />
        <Route path="/add-book" element={<AddBook isAuthenticated={isAuthenticated} SetIsAuthenticated={SetIsAuthenticated}/>} />
        <Route path="/dashboard" element={<AdminDashboard isAuthenticated={isAuthenticated} SetIsAuthenticated={SetIsAuthenticated}/>} />
        <Route path="/login" element={<Login isAuthenticated={isAuthenticated} SetIsAuthenticated={SetIsAuthenticated} />} />
      </Routes>
    </div>
  );
}

export default App;