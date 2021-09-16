import React from "react";
import arrowDown from "../css/img/icons/arrow-down.png";
import arrowUp from "../css/img/icons/arrow-up.png";

export default class MenuItem extends React.Component {
    state = {
        submenuActive: false
    };

    toggleSubmenu = () => {
        this.setState(({ submenuActive }) => ({ submenuActive: !submenuActive }));
    }

    componentDidMount() {
        this.setState({ submenuActive: this.props.expand });
    }

    render() {
        const { icon, title, submenu, notification } = this.props;

        let submenuElement, arrow;
        if (submenu) {
            arrow = this.state.submenuActive
                ? <img className="arrow" src={arrowUp} alt="arrow-up" />
                : <img className="arrow" src={arrowDown} alt="arrow-down" />
            submenuElement = this.state.submenuActive
                ? submenu.map(({ id, title, active }) => (
                    <div key={id} className={`menu-item ${active ? " active" : ""}`}>
                        <div className="menu-item-icon" />
                        <div className="menu-item-title">{title}</div>
                    </div>
                )) : null;
        }

        const notificationElement = notification
            ? <div
                className={`menu-item-notification default ${notification.status}`}
            >
                {notification.count}
            </div>
            : null;

        return (
            <li className="submenu flex-column">
                <div
                    className="menu-item"
                    onClick={this.toggleSubmenu}
                >
                    <img className="menu-item-icon" src={icon} alt="dashboard" />
                    <div className="menu-item-title">{title}</div>
                    {arrow}
                    {notificationElement}
                </div>
                {submenuElement}
            </li >
        );
    }
}