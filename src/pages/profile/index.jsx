import { useContext } from "react";
import { AuthContext } from "../../context";

export default function ProfilePage() {
  const { user, handleLogout, } = useContext(AuthContext);

  console.log(user)
  if (!user) {
    return <h1>No user logged in</h1>; // Fallback if no user is authenticated
  }

  return (
    <div className="profile-page">
      <h1>Welcome, {user?.displayName || "User"}!</h1>
      <p>Email: {user?.email}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};