import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar.js";
import { Home } from "./routes/home.js";
import { About } from "./routes/about.js";
import { Discovery } from "./routes/discovery.js";
import { Login } from "./routes/login.js";
import { Signup } from "./routes/signup.js";
import { NoMatch } from "./routes/no-match.js";
import { TrendingWeekSeries } from "./routes/trending-week-series.js";
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
        <Route
          path="trending-week-series"
          element={<TrendingWeekSeries />}
        ></Route>
        <Route path="*" element={<NoMatch />}></Route>
      </Routes>
    </div>
  );
}

export default App;
