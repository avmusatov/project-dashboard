import React from "react";

export default class Icon extends React.Component {
    state = {
        labelIsVisible: false
    }

    showLabel = () => {
        this.setState({ labelIsVisible: true });
    }

    hideLabel = () => {
        this.setState({ labelIsVisible: false });
    }

    render() {
        const { type, label } = this.props;
        const classNames = ["icon-img", `icon-${type}`];

        return (
            <div
                className="icon"
                onMouseEnter={this.showLabel}
                onMouseLeave={this.hideLabel}>
                <div className={classNames.join(" ")}>
                </div>
                {this.state.labelIsVisible && label ? <span className="icon-label" hidden>{label}</span> : null}
            </div>
        );
    }
}