import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useEffect, useState } from 'react';

function Header() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const wishlist = useSelector(state => state.wishlist.wishlist);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate('/');
  };

  const handleWishlistClick = () => {
    navigate('/wishlist');
  };

  return (
    <Navbar bg="light" variant="light" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img
            src="https://www.pngitem.com/pimgs/m/163-1632033_marketplace-logo-hd-png-download.png" // Replace with your logo path
            alt="Logo"
            style={{ width: '200px', height: '40px', marginRight: '10px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {user ? (
              <>
                <Nav.Link className="text-secondary">Welcome, {user.name}</Nav.Link>
                <Nav.Link className="btn btn-danger" onClick={handleLogout}>Logout</Nav.Link>
              </>
            ) : (
              <>
                <Link className="btn btn-outline-dark me-2" to="/login">Login</Link>
                <Link className="btn btn-outline-dark me-2" to="/register">Register</Link>
              </>
            )}
            <div style={{ position: 'relative' }}>
              <i
                onClick={handleWishlistClick}
                className={`bi bi-box2-heart nav-link ${wishlist.length > 0 ? 'text-danger' : 'text-secondary'}`}
                style={{ fontSize: '26px', cursor: 'pointer' }}
              ></i>
              {wishlist.length > 0 && (
                <span style={{ position: 'absolute', top: '-10px', right: '-10px', background: 'crimson', color: 'wheat', borderRadius: '75%', padding: '5px 10px', fontSize: '12px', fontWeight: 'bold' }}>
                  {wishlist.length}
                </span>
              )}
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
