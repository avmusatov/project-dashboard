import React from "react";
import Icon from "./Icon";
import UserInfo from "./UserInfo";
import { toolbarIconsLeftProps, toolbarIconsRightProps } from "../helpers/render-data";

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
        return (
            <div
                className={`toolbar ${this.props.sidebarActive ? "shifted" : ""}`}
                onClick={this.toggleLoginMenu}
            >
                <ul className="toolbar-item-group flex-row-nowrap">
                    {!this.props.sidebarActive
                        ? <li onClick={this.props.openSidebar}>
                            <Icon type="list" />
                        </li>
                        : null}
                    {this.renderIconsList(toolbarIconsLeftProps)}
                </ul>
                <ul className="toolbar-item-group flex-row-nowrap">
                    {this.renderIconsList(toolbarIconsRightProps)}
                    <li>
                        <UserInfo {...this.props.user} {...this.state} />
                    </li>
                </ul>
            </div>
        );
    }
}