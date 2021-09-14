import React from "react";

const UserInfo = (props) => {
    const { userName, userRole, userImage, loginMenuVisible } = props;

    const menu = loginMenuVisible
        ? (<div className="login-menu flex-column">
            <button className="login-menu-button flex-row-nowrap">
                <div className="button-img icon-img icon-login"></div>
                <span>Login</span>
            </button>
            <button className="login-menu-button flex-row-nowrap">
                <div className="button-img icon-img icon-register"></div>
                <span>Register</span>
            </button>
        </div>)
        : null;

    return (
        <div className="user-info flex-row-nowrap">
            <div className="user-info-main flex-column">
                <span className="user-info-header">{userName}</span>
                <span className="transparent">{userRole}</span>
            </div>
            <img src={userImage} alt={userName} />
            {menu}
        </div>
    );
}

export default UserInfo;