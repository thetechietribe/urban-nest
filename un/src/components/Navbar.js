import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="opts">
          <li><a href='/about'>about</a></li>
          <li><a href='/services'>services</a></li>
          <li><a href='/featured-work'>featured work</a></li>
        </ul>
        <h1 className="nav-logo"><a href='/'>Urban Nest</a></h1>
        <ul className="opts opts-2">
          <li><a href='/community'>community</a></li>
          <li>media</li>
          <li>contact</li>
        </ul>
        <div className="menu-bars">
          <MenuIcon className='menu-icon'/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;