import React from "react";
import {Link} from "react-router-dom"
import {Collapse,Navbar,NavbarToggler,Nav,NavItem,NavbarText} from "reactstrap"

class Navigationbar extends React.Component{
    constructor(props){
        super(props);
        this.state = {isOpen:false}
    }

    toggle =()=>{
        this.setState({isOpen:!this.state.isOpen})
    }

    render(){
        var isOpen = this.state.isOpen;

        return (
            <div>
                <Navbar color="dark" dark expand="md"> 
                    <Link to="/" className="navbar-brand">Home</Link>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem className="mr-auto" navbar>
                                <Link to="/about">About</Link>
                            </NavItem>
                        </Nav>
                        <NavbarText>Welcome</NavbarText>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}

export default Navigationbar;