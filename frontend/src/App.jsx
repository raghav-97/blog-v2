import Navbar from "./components/navbar";
import Home from "./pages/home";
import "./App.css";

function App() {
  return (
    <div className="px-4 py-16 mx-auto max-w-screen-lg">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
