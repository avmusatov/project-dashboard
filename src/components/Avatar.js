import React from "react";

export default class Avatar extends React.Component {
    state = {
        displayName: false
    }

    showName = () => {
        this.setState({ displayName: true });
    }

    hideName = () => {
        this.setState({ displayName: false });
    }

    render() {
        const { image, name, unread, status = "offline" } = this.props;

        const nameElement = this.state.displayName && name
            ? <span className="name">{name}</span>
            : null;

        return (
            <div
                className="chat-avatar-wrapper"
                onMouseEnter={this.showName}
                onMouseLeave={this.hideName}
            >
                {unread ? <div className="unread">{unread}</div> : null}
                <div className={`status ${status}`}></div>
                <img className="chat-avatar" src={image} alt={name} />
                {nameElement}
            </div>
        );
    }
}