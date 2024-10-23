import "bootstrap/dist/css/bootstrap.min.css";
import NavbarCpmponent from "./Components/Navbar";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import About from "./pages/About";
import Footer from "./Components/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavbarCpmponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
