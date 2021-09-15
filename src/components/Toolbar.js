import React from "react";
import Icon from "./Icon";
import UserInfo from "./UserInfo";
import chat from "../css/img/chat.png";

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
            <div className="toolbar-wrapper">
                <div
                    className="toolbar flex-row-nowrap"
                    onClick={this.toggleLoginMenu}>
                    <div className="toolbar-inner flex-row-nowrap">
                        <ul className="toolbar-item-group flex-row-nowrap">
                            {this.renderIconsList(iconsLeftProps)}
                        </ul>
                        <ul className="toolbar-item-group flex-row-nowrap">
                            {this.renderIconsList(iconsRightProps)}
                            <li>
                                <UserInfo {...this.props} {...this.state} />
                            </li>
                        </ul>
                    </div>
                    <div className="chat"><img src={chat} alt="chat" /></div>
                </div>
            </div >
        );
    }
}