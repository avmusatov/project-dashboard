import React from "react";

export default class Header extends React.Component {
    state = {
        headerMenuVisible: false
    }

    toggleHeaderMenu = (event) => {
        if (event.target.className === "header-button") {
            this.setState({ headerMenuVisible: true });
        } else {
            this.setState({ headerMenuVisible: false });
        }
    }

    render() {
        const { userName, userImage } = this.props;
        const menu = this.state.headerMenuVisible
            ? <ul className="header-menu">
                <li>ACME Corp, Backend App</li>
                <li>ACME Corp, Frontend App</li>
                <li>Creapond</li>
                <li>Withinpixels</li>
            </ul>
            : null;

        return (
            <div
                className="header"
                onClick={this.toggleHeaderMenu}>
                <div className="greeting">
                    <img src={userImage} alt={userName} />
                    <div className="greeting-main">
                        <h2 className="greeting-main-header">Welcome back, {userName}!</h2>
                        <div className="notifications-info">
                            <span>You have 2 new messages and 15 new tasks!</span>
                        </div>
                    </div>
                </div>
                <div className="header-panel">
                    <div className="header-caption">ACME Corp. Backend App</div>
                    <button
                        className="header-button"
                    // onClick={this.openHeaderMenu}
                    >
                        ...
                    </button>
                    {menu}
                </div>
            </div>
        );
    }
}