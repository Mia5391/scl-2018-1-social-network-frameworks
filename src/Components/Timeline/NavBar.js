import React, {Component} from 'react';
import {Navbar,NavItem, Icon} from 'react-materialize';
import Logo from '../Login/Logo';
import './Timeline.css'
import firebaseIntegration from '../../firebase'; 

class NavBar extends Component {
    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

     logout() {
        firebaseIntegration.auth().signOut();
        console.log('click');
        window.location = '/';
    }
    
    render() {
        return (
            <Navbar /*brand={<Logo/>}*/ className="navbar" right>   
                <NavItem href={process.env.PUBLIC_URL + '/timeline'} ><span className="textIcon">Timeline</span><Icon>Home</Icon></NavItem>
                <NavItem onClick={this.logout} ><span className="textIcon">Log out</span><Icon>Log Out</Icon></NavItem>       
            </Navbar>
        )
    }
}  

export default NavBar;