import axios from "axios";
import { useState } from "react";

export default function CreateUser() {
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
  const postUser = async (evt) => {
    evt.preventDefault();
    await axios
      .post("http://localhost:3000/register", formData)
      .then((response) => setPostResponse(<p>{response.data}</p>))
      .then(
        setFormData({
          username: "",
          password: "",
        })
      );
  };
  return (
    <div>
      <form action="" onSubmit={postUser}>
        <label htmlFor="username"> Username</label>
        <input
          type="text"
          name="username"
          id="username"
          onChange={handleOnChange}
          value={formData.username}
          required
        />
        <br /> <br />
        <label htmlFor="password"> Password</label>
        <input
          type="password"
          name="password"
          id="password"
          onChange={handleOnChange}
          value={formData.password}
          required
        />
        <br /> <br />
        <button>Submit</button>
      </form>
      {postResponse}
    </div>
  );
}
