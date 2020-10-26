import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Header.css';
import { Avatar } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img className="header_icon" src="https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_B%C3%A9lo.svg" alt=""></img>
            </Link>
            <div className="header_center">
                <input type="text"></input>
                <SearchIcon></SearchIcon>
            </div>

            <div className="header_right">
                <p>Become a host</p>
                <LanguageIcon></LanguageIcon>
                <ExpandMoreIcon></ExpandMoreIcon>
                <Avatar></Avatar>
            </div>

        </div>
    );
};

export default Header;