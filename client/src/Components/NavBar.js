import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    NavbarBrand,
    Button
} from 'reactstrap';
import HamburgerMenu from 'react-hamburger-menu'

class NavBar extends Component {
    state = {
        isOpen: false,
        changeColor: true,
    }

    componentDidMount() {
        window.addEventListener('scroll', this.listenScrollEvent)
    }


    listenScrollEvent = e => {
        if (window.scrollY < 100) {
            this.setState({ changeColor: true })
        } else {
            this.setState({ changeColor: false })
        }
    }

    toggle = (e) => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    render() {
        return (
            <div>

                <Navbar expand="md" dark className={`fixed-top bg-light`}
                    style={{ lineHeight: '30px', transition: 'all .5s ease' }} >
                    <NavbarBrand href="/" className='font-weight-bold lingo-navbar-brand' style={{
                        fontSize: this.state.changeColor ? '35px' : '40px', transition: 'all .5s ease'
                    }}
                    >Lingo</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className='border-0 mt-2 float-right'>
                        <HamburgerMenu
                            isOpen={this.state.isOpen}
                            navbar
                            menuClicked={this.toggle}
                            borderRadius={0}
                            animationDuration={0.5}
                        />
                    </NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar className='text-center'>

                        <Nav className="mx-auto navigation" navbar style={{ fontSize: this.state.changeColor ? '18px' : '20px', transition: 'all .5s ease' }}>
                            <NavItem >
                                <NavLink
                                    className='text-dark'
                                    href="/"
                                >
                                    HOME
                                 </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className='text-dark'
                                    href="#about"
                                >
                                    ABOUT
                                        </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                    className='text-dark'
                                    href="#services"
                                >
                                    SERVICES
                                        </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className='text-dark'
                                    href="#pricing"
                                >
                                    PRICING
                                        </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink
                                    className='text-dark'
                                    href="#contact"
                                >

                                    CONTACT US
                                        </NavLink>
                            </NavItem>

                        </Nav>

                        <Button style={{ fontSize: '20px' }} className='text-light portfolio-button border-0 shadow-lg mr-2'>
                            <i className="far fa-envelope pr-1 "></i>
                            Get a Quote

                        </Button>
                    </Collapse>
                </Navbar>

            </div>
        )
    }
}
export default NavBar