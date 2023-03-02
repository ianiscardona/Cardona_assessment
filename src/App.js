import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./routes/Home.js";
import { About } from "./routes/About.js";
import { Discovery } from "./routes/Discovery.js";
import { Login } from "./routes/Login.js";
import { Signup } from "./routes/Signup.js";
import { NoMatch } from "./routes/NoMatch.js";
import "./App.css";

function App() {
  return (
    <div className="relative">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="discovery" element={<Discovery />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
