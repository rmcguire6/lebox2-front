import {useState} from 'react';
import {signInUser} from '../services/api'
import {createFormData, saveAuthToken} from '../services/utils'
const Signin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUserSubmit = e => {
    e.preventDefault();
    const formData = createFormData(email, password);
    signInUser(formData)
      .then(({data}) => {
        saveAuthToken(data.access_token);
        setEmail('');
        setPassword('');
      })
      .catch(err => console.error('err', err));
  };
  return (
    <>
      <h2>Please Sign In</h2>
      <form className="form" onSubmit={handleUserSubmit}>
        <input
          type="text"
          name="email"
          value={email}
          className="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
          autoComplete="email"
        />
        <br />
        <input
          type="text"
          name="password"
          value={password}
          className="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
          autoComplete="password"
        />
        <br />

        <button className="SigninButton" type="submit">
          Sign In
        </button>
      </form>
    </>
  );
};
export default Signin;
