import {useState} from 'react';
import {saveUser} from '../services/api';

const Register = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submissionError, setSubmissionError] = useState('');

  const handleUserSubmit = e => {
    e.preventDefault();
    saveUser({username: username, email: email, password: password})
      .then(({data}) => console.log('data', data))
      .catch(err => {
        setSubmissionError(`Registration failed. Please try again`);
        console.error(err);
      });
  };
  return (
    <>
      <h2>Please register a new account</h2>
      <form className="form" onSubmit={handleUserSubmit}>
        <input
          type="text"
          name="username"
          value={username}
          className="username"
          autoFocus
          onChange={e => setUsername(e.target.value)}
          placeholder="Name"
          data-cy="username"
        />
        <br />
        <input
          type="email"
          name="email"
          value={email}
          className="email"
          onChange={e => setEmail(e.target.value)}
          placeholder="Email"
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          className="password"
          onChange={e => setPassword(e.target.value)}
          placeholder="Password"
        />
        <br />

        <button className="newUser_button" type="submit">
          Create a New Account
        </button>
      </form>
      {submissionError ? (
        <span className="submission-error">{submissionError}</span>
      ) : null}
    </>
  );
};
export default Register;
