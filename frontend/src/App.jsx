import Navbar from "./components/navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import CreatePost from "./pages/create-post";
import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";

function App() {
  return (
    <>
      <Router>
        <div className="px-4 py-16 mx-auto max-w-screen-lg">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route path="/signin" element={<SignInPage />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
