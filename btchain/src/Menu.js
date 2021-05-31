import React, { useState } from 'react';
import { Menu, Input, Form, Button } from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';


function TopMenu() {
    const [activeItem, setItem] = useState('Home')
    const history = useHistory();
    const handleItemClick = (e, { name }) => {
        setItem(name)
        history.push(`/${name}`)
    }

    return (
        <div>
            <Menu pointing>
                <Menu.Item
                    name='Home'
                    active={activeItem === 'Home'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='About'
                    active={activeItem === 'About'}
                    onClick={handleItemClick}
                />
                <Menu.Item
                    name='NFT'
                    active={activeItem === 'NFT'}
                    onClick={handleItemClick}
                />
              
            </Menu>
        </div >
    )

}

export default TopMenu;