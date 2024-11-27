import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Header() {
    const user = JSON.parse(localStorage.getItem('user-info'));
    //console.warn(user.user.name);
    const navigate = useNavigate();

    function logout()
    {
        localStorage.clear();
        navigate("/register");
    }

    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#">E-commerce</Navbar.Brand>
                <Nav className='mr-auto nav_bar_wrapper'>
                    {
                        localStorage.getItem('user-info') ?
                        <>
                            <Link to="/">Product List</Link>
                            <Link to="/add">Add Product</Link>
                        </>
                        :
                        <>
                            <Link to="/login">Login</Link>
                            <Link to="/Register">Register</Link>
                        </>
                    }
                </Nav>
                {
                    localStorage.getItem('user-info') ?
                    <>
                        <Nav className='ml-auto'>
                            <NavDropdown title={user && user.user.name}>
                                <NavDropdown.Item onClick={logout}>Logout</NavDropdown.Item>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </>
                    :null
                }
            </Navbar>
        </div>
    )
}

export default Header;