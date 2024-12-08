import  { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const AdminDashboard = () => {
  const [customers, setCustomers] = useState([]);
  const [newCustomer, setNewCustomer] = useState({ name: '', email: '' });
  const [adminInfo, setAdminInfo] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = JSON.parse(localStorage.getItem('user')); 

    axios.get('http://localhost:4000/Users')
      .then((response) => {
        const users = response.data;
        const admin = users.find(user => user.email === loggedInUser.email && user.role === 'admin');

        if (admin) {
          const customerList = users.filter(user => user.role === 'customer');
          setAdminInfo(admin);
          setCustomers(customerList);
        } else {
          toast.error("You are not authorized to view this page");
          navigate('/');
        }
      })
      .catch(error => {
        console.error("Error fetching users:", error);
        toast.error("Failed to load users.");
      });
  }, [navigate]);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCustomer((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addCustomer = () => {
    setCustomers([...customers, newCustomer]);
    setNewCustomer({ name: '', email: '' }); 
    toast.success('Customer added successfully!');
  };


  const removeCustomer = (email) => {
    setCustomers(customers.filter((customer) => customer.email !== email));
    toast.warn('Customer removed');
  };

  return (
    <div className="container-fluid">
      <div className="row">

        <div className="col-md-3 bg-light p-4">
          <h4>Admin Dashboard</h4>
          {adminInfo && (
            <div className="text-center">
              <img 
                src={adminInfo.avatar} 
                alt={adminInfo.name} 
                className="img-fluid rounded-circle mb-2" 
                style={{ width: '100px', height: '100px' }} 
              />
              <p><strong>{adminInfo.name}</strong></p>
              <p><strong>Role:</strong> {adminInfo.role}</p>
            </div>
          )}
          <button className="btn btn-danger mt-3 w-100" onClick={handleLogout}>Logout</button>
        </div>


        <div className="col-md-9 p-4">
          <h2>Manage Customers</h2>


          <form className="mb-4">
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={newCustomer.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={newCustomer.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={addCustomer}
            >
              Add Customer
            </button>
          </form>

          <h3>Customer List</h3>
          <ul className="list-group">
            {customers.length > 0 ? (
              customers.map((customer) => (
                <li
                  key={customer.email}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex align-items-center">
                    <img
                      src={customer.avatar}
                      alt={customer.name}
                      className="rounded-circle me-3"
                      style={{ width: '50px', height: '50px' }}
                    />
                    <div>
                      <strong>{customer.name}</strong> - {customer.email}
                    </div>
                  </div>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeCustomer(customer.email)}
                  >
                    Remove
                  </button>
                </li>
              ))
            ) : (
              <p>No customers added yet</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
