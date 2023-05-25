import React,{useState} from 'react';


const Login = (props) => {
  


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handlesubmit = (e) => {
    e.preventDefault();
    console.log(email);
    }
  return (
    <div id="login">
    <div className='auth-form-container'>
      <h2 className='h2'>Login</h2>
      <form className='login-form' onSubmit={handlesubmit}>
        <label htmlFor="email">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder='enter your email' id="email" name='email'/>
        <label htmlFor="password">Password</label>
        <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder='enter your password' id="password" name='password'/>
      <button type="submit">Log In</button>
      </form>
      <button className='link-btn' onClick={() => props.onFormSwitch('register')}>Donot have an account? Register here.</button>
    
    </div>
   
    </div>
  )
}

export default Login


