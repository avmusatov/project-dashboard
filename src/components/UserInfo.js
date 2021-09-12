import React from "react";

const UserInfo = (props) => {
    const { userName, userRole, userImage, loginMenuVisible } = props;

    const menu = loginMenuVisible
        ? (<div className="login-menu">
            <button className="login-menu-button">
                <div className="icon-img icon-login"></div>
                <span>Login</span>
            </button>
            <button className="login-menu-button">
                <div className="icon-img icon-register"></div>
                <span>Register</span>
            </button>
        </div>)
        : null;

    return (
        <div className="user-info">
            <div className="user-info-main">
                <span className="user-info-header">{userName}</span>
                <span className="user-info-subheader">{userRole}</span>
            </div>
            <div className="user-info-img">
                <img src={userImage} alt="user" />
            </div>
            {menu}
        </div>
    );
}

export default UserInfo;