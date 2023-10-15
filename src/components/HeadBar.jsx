import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'


export default function HeadBar() {
    return (
        <Navbar bg="light" expand="lg" >
            <Navbar.Brand style={{margin: "5px 0 0 20px"}} href="#home">
                <img src="https://www.instacart.com/image-server/x36/www.instacart.com/assets/beetstrap/brand/2022/instacart-logo-color@3x-6b71df83cfba8c6827f59bff009df3be6e96d484ebdc5da7e6122e9555eae9b6.png" 
                    alt="instacart logo from site" /> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto"> 
                </Nav>
                <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder", display: "flex" }}>
                    <Nav.Link href="#LogIn">Log In</Nav.Link>
                    <Button variant="success">Sign Up</Button>{' '}
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
