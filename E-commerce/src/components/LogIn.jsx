import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user')) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(`http://localhost:4000/Users?email=${email}&password=${password}`);
      const user = res.data[0];
      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        toast.success('Login successful');
        if (user.role === 'admin') {
          navigate('/admindashboard');
        } else {
          navigate('/');
        }
      } else {
        toast.error('Invalid email or password');
      }
    } catch (error) {
        console.error("Error during registration:", error);

      }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <form onSubmit={handleLogin} className="border p-4 rounded" style={{ width: '400px', backgroundColor: 'white' }}>
        <h3 className="text-center">Login</h3>
        <div className="form-group mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Login</button>
      </form>
    </div>
  );
};

export default Login;
