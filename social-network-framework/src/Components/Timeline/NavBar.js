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
            <Navbar brand={<Logo/>} className="navbar" right>   
                <NavItem href='/Wall'><span className="textIcon">Wall</span><Icon>home</Icon></NavItem>
                <NavItem href='/Profile'><span className="textIcon">Profile</span><Icon>person</Icon></NavItem>
                <NavItem href='/Friends'><span className="textIcon">Friends</span><Icon>person_add</Icon></NavItem>
                <NavItem onClick={this.logout} ><span className="textIcon">Log out</span><Icon>keyboard_tab</Icon></NavItem>       
            </Navbar>
        )
    }
}  

export default NavBar;