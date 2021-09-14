import React from "react";
import { WidgetContent, WidgetHeader } from "./Widget";
import transformDate from "../../helpers/transform-date";
import Icon from "../Icon";

export default class TimeWidget extends React.Component {
    state = {
        dateString: null
    }

    interval = null;

    componentDidMount() {
        this.setState({ dateString: new Date().toISOString() });
        this.interval = setInterval(() => { this.setState({ dateString: new Date().toISOString() }) }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { year, month, dayNum, day, time } = transformDate(this.state.dateString);

        const monthStyle = {
            fontSize: "1.8rem",
            fontWeight: 400,
        }

        return (
            <div className="widget-container">
                <WidgetHeader
                    title={<div className="title transparent">{`${day},${time}`}</div>}
                    options={<Icon type="more" />}
                />
                <WidgetContent>
                    <div style={monthStyle} className="transparent">{month}</div>
                    <div className="value transparent">{dayNum}</div>
                    <div className="year transparent">{year}</div>
                </WidgetContent>
            </div>
        );
    }
}