import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Navbar() {
  const { user, logout } = useContext(AuthContext);
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-100 mb-4">
      <span className="font-bold text-lg">Fitness Tracker</span>
      {user && (
        <div>
          <span className="mr-4">{user.username}</span>
          <button onClick={logout} className="text-red-500">Logout</button>
        </div>
      )}
    </nav>
  );
}