import React from 'react';
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
// import FlagIcon from "@material-ui/icons/Flag";
// import SubscriptionsOutlinedIcon from "@material-ui/icons/SubscriptionsOutlinedIcon";
// import StorefrontOutlinedIcon from "@material-ui/icons/StorefrontOutlinedIcon";
// import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircleIcon";


function Header() {
    return (
        <div className="header">
            <div className="header__left">
                <img
                  src="https://facebookbrand.com/wp-content/uploads/2019/10/flogo_RGB_HEX-BRC-Site-250.png?w=250&h=250"
                  alt=""
                />
                <div className="header__input">
                    <SearchIcon />
                    <input type="text" />
                </div>

            </div>

            <div className="header__middle">
                <div className="header__option">
                    <HomeIcon fontSize="large"/>
                </div>
            </div>
            
            <div className="header__right"></div>
            
        </div>
    )
}

export default Header
