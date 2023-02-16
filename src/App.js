import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./components/Home.js";
import { About } from "./components/About.js";
import { Discovery } from "./components/Discovery.js";
import { Login } from "./components/Login.js";
import { Signup } from "./components/Signup.js";
import { NoMatch } from "./components/NoMatch.js";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="discovery" element={<Discovery />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="signup" element={<Signup />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </>
  );
}

export default App;
