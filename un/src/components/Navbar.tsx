import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="opts">
          <li>about</li>
          <li>services</li>
          <li>featured work</li>
        </ul>
        <h1 className="nav-logo">Urban Nest</h1>
        <ul className="opts">
          <li>Community</li>
          <li>media</li>
          <li>contact</li>
        </ul>
        <div className="menu-bars">
          <MenuIcon/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
