import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <nav>
            <Link to= '/'>Home</Link>
            <Link to= '/loginform'>Login</Link>
            
            
            
            <Link to= '/Signup'>Signup</Link>
        </nav>
    );
}