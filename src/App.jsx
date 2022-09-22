import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Details from "./components/Details";
import Home from "./components/Home";
import Info from "./components/Info";
import Profile from "./components/Profile";
import "./App.css";
import ErrorPage from "./components/ErrorPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path ="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>} />
          <Route path="/profile/info" element={<Info/>} />
          <Route path="/profile/:profileId" element={<Details/>} />
          <Route path="*" elements={<ErrorPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
