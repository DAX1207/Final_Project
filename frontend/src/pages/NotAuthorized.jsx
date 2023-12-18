import { Link } from "react-router-dom";

const NotAuthorized = () => {
  return (
    <div className="Notauthorized">
      <h1>You are not authorized to visit this page &#128533;</h1>
      <br />
      <p>Please login first</p>
      <Link to={"/"}>
        <button>Login</button>
      </Link>
    </div>
  );
};

export default NotAuthorized;
