import MenuIcon from '@mui/icons-material/Menu';
import PersistentDrawerRight from './Drawer';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="opts">
          <li><a href='/about'>about</a></li>
          <li><a href='/services'>services</a></li>
        </ul>
        <h1 className="nav-logo-lg" ><a href='/'>Urban Nest</a></h1>
        <ul className="opts-2">
          <li><a href='/products'>products</a></li>
          <li><a href='contact'>contact</a></li>
        </ul>
        <div className="menu-bars">
          <PersistentDrawerRight/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;