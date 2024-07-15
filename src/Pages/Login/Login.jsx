// import { useState, useEffect } from "react";
// import { Link, useNavigate, useLocation } from "react-router-dom";
// import "./Login.css";

// export default function Login({ isLoggedIn, setIsLoggedIn }) {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();
//   const location = useLocation();
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch("../../Assets/users.json")
//       .then((response) => response.json())
//       .then((data) => setUsers(data))
//       .catch((error) => console.error("Error fetching user data:", error));
//   }, []);

//   const handleLogin = () => {
//     const user = users.find((user) => user.name === username);

//     if (!user) {
//       alert("User not found. Please register or check your username.");
//       return;
//     }

//     if (user.password === password) {
//       setIsLoggedIn(true);
//       navigate(location?.state?.from?.pathname);
//     } else {
//       alert("Invalid password");
//     }
//   };

//   const handleLoginAsGuest = () => {
//     setIsLoggedIn(true);
//     setUsername("Guest");
//     setPassword("");
//     navigate(location?.state?.from?.pathname);
//   };

//   const handleLogout = () => {
//     setIsLoggedIn(false);
//     setUsername("");
//     setPassword("");
//     navigate("/");
//   };

//   return (
//     <div className="login-page">
//       {isLoggedIn ? (
//         <div className="login-form">
//           <h2>Want to logout?</h2>
//           <button className="btn-outline-secondary" onClick={handleLogout}>
//             Logout
//           </button>
//         </div>
//       ) : (
//         <div className="login-form">
//           <h2>Login Page</h2>
//           <div>
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="password">Password:</label>
//             <input
//               type="password"
//               id="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </div>
//           <button className="btn-outline-secondary" onClick={handleLogin}>
//             Login
//           </button>
//           <button
//             className="btn-outline-secondary"
//             onClick={handleLoginAsGuest}
//           >
//             Login as Guest
//           </button>
//           <Link className="btn-google" to="/signup">
//             Sign Up?
//           </Link>
//         </div>
//       )}
//       <div className="login-image">
//         <img
//           src="https://images.unsplash.com/photo-1617922001439-4a2e6562f328?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29tZW4lMjBmYXNoaW9ufGVufDB8fDB8fHww&w=1000&q=80"
//           alt="Login"
//           className="login-image"
//         />
//       </div>
//     </div>
//   );
// }
import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import { useNavigate, useLocation, Link } from "react-router-dom";

function Login({ isLoggedIn, setIsLoggedIn }) {
  const history = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      await axios
        .post("http://localhost:8000/", {
          email,
          password
        })
        .then((res) => {
          if (res.data == "exist") {
            history("/home", { state: { id: email } });
          } else if (res.data == "notexist") {
            alert("User have not sign up");
          }
        })
        .catch((e) => {
          alert("wrong details");
          console.log(e);
        });
    } catch (e) {
      console.log(e);
    }
  }

  const handleLoginAsGuest = () => {
    setIsLoggedIn(true);
    setEmail("Guest");
    setPassword("");
    history(location?.state?.from?.pathname);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    history("/");
  };

  return (
    <div className="login-page">
      {isLoggedIn ? (
        <div className="login-form">
          <h2>Want to logout?</h2>
          <button className="btn-outline-secondary" onClick={handleLogout}>
            Logout
          </button>
        </div>
      ) : (
        <div className="login-form">
          <h2>Login</h2>
          <form action="POST" style={{ textAlign: "center" }}>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              placeholder="Email"
            />
            <input
              type="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              placeholder="Password"
            />
            <button type="submit" onClick={submit} />
            <br />
            <button onClick={handleLoginAsGuest}>Guest</button>
          </form>
          <p>OR</p>
          <Link to="/Signup" className="btn-google">
            Signup ?
          </Link>
        </div>
      )}
      <div className="login-image">
        <img
          src="https://images.unsplash.com/photo-1536096928601-99bac26a838b?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=1000&ixid=MnwxfDB8MXxyYW5kb218MHx8d29tZW4tZmFzaGlvbnx8fHx8fDE2OTIzNDc5OTA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=900"
          alt="Login"
          className="login-image"
        />
      </div>
    </div>
  );
}

export default Login;
