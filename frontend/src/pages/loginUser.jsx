import axios from "axios";
import { useState } from "react";

export default function loginUser() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [postResponse, setPostResponse] = useState("");

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  const postUser = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:3000/login", formData)
      .then((response) => setPostResponse(<p>{response.setFormData}</p>));
  };

  return (
    <div>
      <form action="" onSubmit={postUser}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleOnChange}
          value={formData.username}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
          value={formData.password}
          required
        />
        <button>Log In</button>
      </form>
      {postResponse}
    </div>
  );
}
