import { useAuth } from "../context/auth-context";
import Sidebar from "./sidebar";

export default function Navbar() {
  const { user } = useAuth();
  console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center ">
        <h1 className="text-3xl font-bold mb-4">BlogHub</h1>
      </div>

      <Sidebar />

      <div className="flex gap-4 items-center justify-center">
        <a href="/">Home</a>
        <a href="/create-post">Create</a>
      </div>
      <div className=" flex gap-4 items-center justify-center cursor-pointer">
        {user ? (
          <div>
            <a href="/logout">Log Out</a>
          </div>
        ) : (
          <div>
            <a href="/signup">Sign Up</a>
            <a href="/signin">Sign In</a>
          </div>
        )}
      </div>
    </div>
  );
}
