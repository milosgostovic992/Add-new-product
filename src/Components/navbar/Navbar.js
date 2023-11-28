import { Link } from 'react-router-dom';

const NavBar = () => {

    return (  
        <nav className="nav">
            <h1>The Blog</h1>
            <div className="links">
                <Link className="nav__btn" to="/">Home</Link>
                <Link className="nav__btn" to="/newproduct">Add new product</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;