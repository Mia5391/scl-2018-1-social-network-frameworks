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
                <NavItem href={process.env.PUBLIC_URL + '/Timeline'} ><span className="textIcon">Timeline</span><Icon>home</Icon></NavItem>
                <NavItem onClick={this.logout} ><span className="textIcon">Log out</span><Icon></Icon></NavItem>       
            </Navbar>
        )
    }
}  

export default NavBar;