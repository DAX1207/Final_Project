import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";

export default function LoginUser() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [postResponse, setPostResponse] = useState("");
  const [jwtCookie, setJwtCookie] = useState("");
  const [getuser,setgetuser] = useState("");
  const navigate = useNavigate();

  const makeCookie = (cookie) => {
    Cookies.set("jwt-cookie", cookie);
  };

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const postToDB = async (user) => {
    const postUser = { ...user };
    const uname = user.username
    setgetuser(uname);
    await axios
      .post("http://localhost:3000/login", postUser)
      .then((response) => {
        setPostResponse(<p>{response.data.message}</p>);
        if (response.data.message == "Successful Login") {
          const jwtCookie = makeCookie(response.data.token);
          setJwtCookie(jwtCookie);
          navigate("/app",{state:{uname:uname}});

            
        }
      });
  };
  const postUser = async (evt) => {
    evt.preventDefault();
    postToDB(formData);
    
    
    setFormData({
      username: "",
      password: "",
    });
  };
  return (
    <div className="login-Container">
      <h2>Login</h2>
      <form action="" onSubmit={postUser}>
        <label htmlFor="username"> Username </label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleOnChange}
          value={formData.username}
          required
        />
        <br /> <br />
        <label htmlFor="password"> Password </label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
          value={formData.password}
          required
        />
        <br /> <br />
        <button>Log In</button>
        <p>
          Not a member yet? Click <Link to="/CreateUser">here</Link> to join
        </p>
      </form>
      {<p>{postResponse}</p>}
      {<p>{Cookies.get("jwt-cookie")}</p>}
    </div>
  );
}
