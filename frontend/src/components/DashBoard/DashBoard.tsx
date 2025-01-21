import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { axiosInstance } from "../../api/axiosInstance";
import {  useAppDispatch, useAppSelector } from "../../redux/store";
import { clearUser, setUser } from "../../redux/reducers/userReducer";

const Dashboard = () => {

  const navigate = useNavigate();
  const dispatch=useAppDispatch()
  const user=useAppSelector((store)=>store.user.user)
  useEffect(() => {
    // Fetch user data from the backend
    axiosInstance
      .get("/user/dashboard", { withCredentials: true })
      .then((response) => {
        
        dispatch(setUser(response.data))
        
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // navigate("/"); // Redirect to login if unauthorized
      });
  }, [navigate]);

  const handleLogout = () => {
    dispatch(clearUser())
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
          <p>Welcome, {user?.name}</p>
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
