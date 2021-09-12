import React from "react";

const WidgetRow = ({ widgets, count = 5 }) => {
    const renderWidgets = (widgets) => {
        return widgets.map((widget) => {
            return <li
                style={{ width: `${100 / count}%` }}
                className="widget-element" key={widget.title}
            >
                <Widget {...widget} />
            </li>;
        });
    }

    return (
        <ul className="widgets">
            {renderWidgets(widgets)}
        </ul>);
}

const Widget = ({ title, value, label, footerText, color }) => {
    return (
        <div className="widget">
            <div className="widget-header">
                <div className="widget-title">{title}</div>
                <div className="icon">
                    <div className="options icon-img icon-more"></div>
                </div>

            </div>
            <div className="widget-content" style={{ color }}>
                <div className="value">{value}</div>
                <div className="label">{label}</div>
            </div>
            <div className="widget-footer">
                <span>{footerText}</span>
            </div>
        </div>);
}

export default WidgetRow;