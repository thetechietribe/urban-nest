import MenuIcon from '@mui/icons-material/Menu';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <ul className="opts">
          <li><a href='/about'>about</a></li>
          <li><a href='/services'>services</a></li>
        </ul>
        <h1 className="nav-logo"><a href='/'>Urban Nest</a></h1>
        <ul className="opts-2">
          <li><a href='/products'>products</a></li>
          <li><a href='contact'>contact</a></li>
        </ul>
        <div className="menu-bars">
          <MenuIcon className='menu-icon'/>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;