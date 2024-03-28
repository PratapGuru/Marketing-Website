import "./App.css";
import Homepage from "./components/Homepage";
import GT3_RS from "./components/911-GT3-RS";
import GT3 from "./components/911-GT3";
import Turbo from "./components/911-Turbo";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/911-GT3-RS" element={<GT3_RS />} />
          <Route exact path="/911-GT3" element={<GT3 />} />
          <Route exact path="/911-Turbo" element={<Turbo />} />
          <Route exact path="/ContactUs" element={<ContactUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
