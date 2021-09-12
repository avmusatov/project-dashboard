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
            { type: "list", label: "List" },
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
                className="toolbar"
                onClick={this.toggleLoginMenu}>
                <ul className="toolbar-item-group">
                    {this.renderIconsList(iconsLeftProps)}
                </ul>
                <ul className="toolbar-item-group">
                    {this.renderIconsList(iconsRightProps)}
                    <li>
                        <UserInfo {...this.props} {...this.state} />
                    </li>
                </ul>
            </div>
        );
    }
}