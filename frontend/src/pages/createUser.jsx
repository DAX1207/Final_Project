import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
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
    <div className="create-Container">
      <h2> Create User </h2>
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
        <button>Submit</button>
        <p>
          Go back to <Link to="/"> Login Page </Link>
        </p>
      </form>
      {postResponse}
    </div>
  );
}
