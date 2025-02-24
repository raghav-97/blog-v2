import Navbar from "./components/navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import "./App.css";
import CreatePost from "./pages/create-post";
import SignUpPage from "./pages/sign-up";
import SignInPage from "./pages/sign-in";
import { AuthProvider } from "./context/auth-context";

function App() {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <div className="px-4 py-16 mx-auto max-w-screen-lg">
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create-post" element={<CreatePost />} />
              <Route path="/signup" element={<SignUpPage />} />
              <Route path="/signin" element={<SignInPage />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
