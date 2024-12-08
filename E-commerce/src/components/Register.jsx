import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('customer');
  const navigate = useNavigate();


  const validate = () => {
    if (name === '' || email === '' || password === '') {
      return false;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      return false;
    }
    return true;
  };


  const handleRegister = async (e) => {
    e.preventDefault();
    if (validate()) {
      const newUser = {
        name,
        email,
        password,
        role,
        avatar: 'https://i.imgur.com/DTfowdu.jpg', 
      };
      try {
        await axios.post('http://localhost:4000/Users', newUser);
        navigate('/login');
      } 
      
      catch (error) {
        console.error("Error during registration:", error);
      }
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <form onSubmit={handleRegister} className="border p-4 rounded" style={{ width: '400px', backgroundColor: 'white' }}>
        <h3 className="text-center">Register</h3>
        <div className="form-group mb-3">
          <label>Username</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group mb-3">
          <label>Role</label>
          <select className="form-control" value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="customer">Customer</option>
            <option value="admin">Admin</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary btn-block">Register</button>
      </form>
    </div>
  );
};

export default Register;
