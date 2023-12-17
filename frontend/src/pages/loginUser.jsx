import axios from "axios";
import { useState } from "react";

export default function loginUser() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const handleOnChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <div>
      <form action="">
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" required />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" required />
        <button>Log In</button>
      </form>
    </div>
  );
}
