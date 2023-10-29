import { useState, useEffect } from "react"
import {Navbar, Container} from "react-bootstrap"



export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home")
    const [scrolled, seScrolled] = useState(false)

    useEffect(() =>{
        const onScroll = () => {
            if(window.scrollY > 50){
                seScrolled(true);
            }else{
                seScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll);
    })

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }


    return(
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
        <Container>
            <Navbar.Brand href="#home">
                <img src="" alt="" />
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" >
            <span className="navbar-toggler-icon"></span>
            </Navbar.Toggle>

            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                <Nav.Link href="#skills"  className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Skills')}>Skills</Nav.Link>
                <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Project')}>Project</Nav.Link>
            </Nav>
            <span className="navbar-text">
                <div className="social-icon">
                    <a href="#"><img src={} alt="" /></a>
                    <a href="#"><img src={} alt="" /></a>
                    <a href="#"><img src={} alt="" /></a>

                </div>
                <button className="vvd" onClick={() => console.log("connect")}><span>Let's connect</span></button>
            </span>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    )
}