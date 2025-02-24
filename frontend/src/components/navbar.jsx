import { Link } from "react-router-dom";
import { useAuth } from "../context/auth-context";
import Sidebar from "./sidebar";

export default function Navbar() {
  const { user } = useAuth();
  // console.log("logged in userid", user);
  return (
    <div className="flex justify-around items-center">
      <div className="flex items-center ">
        <h1 className="text-3xl font-bold mb-4">BlogHub</h1>
      </div>

      <Sidebar />

      <div className="flex gap-4 items-center justify-center">
        <Link to="/">Home</Link>
        <Link to="/create-post">Create Post</Link>
      </div>
      <div className=" flex gap-4 items-center justify-center cursor-pointer">
        {user ? (
          <div>
            <Link to="/logout">Log Out</Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link to="/signin">Sign In</Link>
            <Link to="/signup">Sign Up</Link>
          </div>
        )}
      </div>
    </div>
  );
}
