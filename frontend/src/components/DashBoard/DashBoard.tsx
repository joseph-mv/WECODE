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
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Dashboard</h1>
      {user ? (
        <div>
          <p>Welcome, {user}</p>
          <button
            onClick={handleLogout}
            style={{
              padding: "10px 20px",
              fontSize: "16px",
              backgroundColor: "#FF5733",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
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
