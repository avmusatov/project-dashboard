import React from "react";
import Icon from "./Icon";
import UserInfo from "./UserInfo";


export default class Toolbar extends React.Component {
    state = {
        loginMenuVisible: false
    }

    renderIconsList = (iconsProps) => {
        return iconsProps.map((iconProps) => {
            return <li key={iconProps.type}>
                <Icon {...iconProps} />
            </li>;
        });
    }

    toggleLoginMenu = (event) => {
        const element = event.target;
        const menuVisible = (element.className.includes("user") || element.parentNode.className.includes("user"))
            && !this.state.loginMenuVisible;

        if (menuVisible) {
            this.setState({ loginMenuVisible: true });
        } else {
            this.setState({ loginMenuVisible: false });
        }
    }

    render() {
        const iconsLeftProps = [
            { type: "calendar", label: "Calendar" },
            { type: "mail", label: "Mail" },
            { type: "contact-book", label: "Contact" },
            { type: "todolist", label: "ToDo list" },
            { type: "star", label: "Start" },
        ];

        const iconsRightProps = [
            { type: "font" },
            { type: "fullscreen" },
            { type: "search", label: "Search" },
            { type: "bookmark" },
            { type: "bell" },
        ];

        return (
            <div
                className={`toolbar ${this.props.sidebarActive ? "shifted" : ""}`}
                onClick={this.toggleLoginMenu}
            >
                <ul className="toolbar-item-group flex-row-nowrap">
                    <li onClick={this.props.toggleSidebar}>
                        <Icon type="list" label="List" />
                    </li>
                    {this.renderIconsList(iconsLeftProps)}
                </ul>
                <ul className="toolbar-item-group flex-row-nowrap">
                    {this.renderIconsList(iconsRightProps)}
                    <li>
                        <UserInfo {...this.props.user} {...this.state} />
                    </li>
                </ul>
            </div>
        );
    }
}