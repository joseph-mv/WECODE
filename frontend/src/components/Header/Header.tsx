// import { useEffect, useState } from "react";

// interface User {
//   firstName: string;
//   lastName: string;
//   email: string;
//   membershipType: string;
// }

const Header = () => {
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   // Get user data from URL query (or you can get from a state management tool like Redux)
  //   const queryParams = new URLSearchParams(window.location.search);
  //   const userData = queryParams.get('user');
  //   if (userData) {
  //     setUser(JSON.parse(userData));
  //   }
  // }, []);
  // console.log(user)
  return (
    <header className=" flex p-3 h-20  justify-between items-center ">
      <div className="rounded-full outline outline-mainText outline-1">
        <img
          style={{ width: "50px", height: "auto" }}
          src="images/logo.png"
          alt="logo"
        />
      </div>
      </header>
  )
}

export default Header