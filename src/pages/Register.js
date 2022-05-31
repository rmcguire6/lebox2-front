import {useContext} from 'react';
import {saveUser} from '../services/api';
import {UserContext} from '../App';
const Register = () => {
  const [user, setUser] = useContext(UserContext);
  const handleUserChange = e => {
    const {name, value} = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleUserSubmit = e => {
    e.preventDefault();
  };
  return (
    <>
      <h2>Please register a new account</h2>
      <form className="form" onSubmit={handleUserSubmit}>
        <input
          type="text"
          name="username"
          value={user.username}
          className="username"
          autoFocus
          onChange={handleUserChange}
          placeholder="Name"
          data-cy="username"
        />
        <br />
        <input
          type="email"
          name="email"
          value={user.email}
          className="email"
          onChange={handleUserChange}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={user.password}
          className="password"
          onChange={handleUserChange}
          placeholder="Password"
        />
        <br />

        <button className="newUser_button" type="submit">
          Create a New Account
        </button>
      </form>
    </>
  );
};
export default Register;
