const token = localStorage.getItem("adminToken");

export const config = {
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`, // Attach JWT token
  },
};
