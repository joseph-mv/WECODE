import  { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch user data from the backend
    axiosInstance
      .get("/user/dashboard", { withCredentials: true })
      .then((response) => {
        // console.log(response);
        setUser(response.data.name);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // navigate("/"); // Redirect to login if unauthorized
      });
  }, [navigate]);

  const handleLogout = () => {
    axiosInstance
      .get("/user/logout", { withCredentials: true })
      .then(() => {
        navigate("/"); // Redirect to login after logout
      })
      .catch((error) => {
        console.error("Error logging out:", error);
      });
  };

  return (
    <div className="text-center min-h-[80vh]">
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user}</p>
          <button className="bg-red-300 m-2 p-2 rounded"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Dashboard;
