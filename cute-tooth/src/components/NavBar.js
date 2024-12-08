import { NavLink } from "react-router-dom";

function NavBar(){
    return(
    <div className="navbar bg-light sticky-top navbar-expand">
      <div>
        <NavLink to='/' className="m-2 navbar-brand"><img src="https://www.linkdentalcare.com/wp-content/uploads/2015/07/dentist-logo-1.png" alt="" className="wp-image-94 alignnone size-full" style={{color:"white",width:39 ,height:30}}/>Cute Tooth</NavLink></div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to='/About' className='nav-link' style={{ fontSize: '1.5em' }}>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/dentist' className='nav-link' style={{ fontSize: '1.5em' }}>Dentists</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/dentalClinics' className='nav-link' style={{ fontSize: '1.5em' }}>Dental Clinics</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/dentalLab' className='nav-link' style={{ fontSize: '1.5em' }}>Dental Laboratories</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/Products' className='nav-link' style={{ fontSize: '1.5em' }}>Products</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/contact' className='nav-link' style={{ fontSize: '1.5em' }}>Contact Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to='/cartList' className='nav-link' style={{ fontSize: '1.5em' }}><i className="bi bi-cart-fill"></i> my cart list</NavLink>
          </li>

        </ul>
        
    </div>);
}
export default NavBar;
