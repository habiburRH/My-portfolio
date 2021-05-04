import React from 'react';
import NavMenu from '../../Shared/NavMenu/NavMenu';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <div className="header-container">
            <NavMenu></NavMenu>
            <HeaderMain></HeaderMain>
        </div>
    );
};

export default Header;