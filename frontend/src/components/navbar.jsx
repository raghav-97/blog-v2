import Sidebar from "./sidebar";

export default function Navbar() {
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
        <a href="/login">Login</a>
        <a href="/register">Register</a>
      </div>
    </div>
  );
}
