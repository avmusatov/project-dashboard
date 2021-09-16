import React from "react";

export default class Sidebar extends React.Component {
    render() {
        const classNames = `sidebar ${!this.props.sidebarActive ? "hidden" : ""}`;

        return (
            <div className={classNames}>
            </div>
        );
    }
}