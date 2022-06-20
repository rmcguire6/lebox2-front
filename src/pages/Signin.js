import {useContext, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {signInUser} from '../services/api';
import {createFormData} from '../services/utils';
import {AuthContext} from 'App';

const Signin = () => {
  const {token, setToken} = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleUserSubmit = e => {
    e.preventDefault();
    const formData = createFormData(email, password);
    signInUser(formData)
      .then(({data}) => {
        setToken(data.access_token);
        console.log('signin', token);
        setEmail('');
        setPassword('');
        navigate('/dashboard');
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

        <button className="SignInButton" type="submit">
          Sign In
        </button>
      </form>
    </>
  );
};
export default Signin;
