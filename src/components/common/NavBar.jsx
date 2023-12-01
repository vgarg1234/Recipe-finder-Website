
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { logo } from '../../constants/constant';

const NavBar = () => {

    return (
        <Menu borderless fixed="top">
            <Menu.Item>
                <div style={{height:'50px'}}>
                <img src={logo} alt="logo" style={{ width: 130,position:'relative',bottom:'22px'}} />
                </div>
            </Menu.Item>
           <Menu.Item name="Home" as={Link} to="/" /> 
           <Menu.Item name="Recipes" as={Link} to="/recipes" /> 
        </Menu>
    )
}

export default NavBar;