import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";

const BasicWidget = ({ title, value, label, footerText, color = "#000" }) => {
    const headerTitle = <div className="title transparent">{title}</div>;
    const headerOptions = (
        <div className="icon">
            <div className="options icon-img icon-more"></div>
        </div>
    );

    return (
        <div className="widget-container">
            <WidgetHeader title={headerTitle} options={headerOptions} />
            <WidgetContent color={color}>
                <div className="value">{value}</div>
                <div className="label">{label}</div>
            </WidgetContent>
            <WidgetFooter>
                <span className="transparent">{footerText}</span>
            </WidgetFooter>
        </div >
    );
}

export default BasicWidget;