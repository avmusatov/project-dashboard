import React from "react";

export default class UserInfo extends React.Component {
    state = {
        menuVisible: false
    }

    toggleMenu = () => {
        this.setState(({ menuVisible }) => ({ menuVisible: !menuVisible }));
    }

    render() {
        const menu = this.state.menuVisible
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

        const { userName, userRole, userImage } = this.props;
        return (
            <button
                className="user-info"
                onClick={this.toggleMenu}
            >
                <div className="user-info-main">
                    <span className="user-info-header">{userName}</span>
                    <span className="user-info-subheader">{userRole}</span>
                </div>
                <div className="user-info-img">
                    <img src={userImage} alt="user" />
                </div>
                {menu}
            </button>
        );
    }
}