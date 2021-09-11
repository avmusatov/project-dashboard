import React from "react";
import Icon from "./Icon";
import UserInfo from "./UserInfo";
import avatar from "../css/img/Velazquez.jpg";

const Toolbar = () => {
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

    const renderIconsList = (iconsProps) => {
        return iconsProps.map((iconProps) => {
            return <li key={iconProps.type}>
                <Icon {...iconProps} />
            </li>;
        });
    }

    return (
        <div className="toolbar">
            <ul className="toolbar-item-group">
                {renderIconsList(iconsLeftProps)}
            </ul>
            <ul className="toolbar-item-group">
                {renderIconsList(iconsRightProps)}
                <li>
                    <UserInfo
                        name="John Doe"
                        role="Guest"
                        image={avatar}
                    />
                </li>
            </ul>
        </div>);
}

export default Toolbar;