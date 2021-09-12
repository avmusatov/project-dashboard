import React from "react";

const Widget = ({ title, value, label, footerText, color = "#000" }) => {
    return (
        <div className="widget">
            <WidgetHeader> {title}</WidgetHeader>
            <WidgetContent color={color}>
                <div className="value">{value}</div>
                <div className="label">{label}</div>
            </WidgetContent>
            <WidgetFooter>
                <span>{footerText}</span>
            </WidgetFooter>
        </div >
    );
}

const WidgetHeader = ({ children }) => {
    return (
        <div className="widget-header" >
            <div className="widget-title">{children}</div>
            <div className="icon">
                <div className="options icon-img icon-more"></div>
            </div>
        </div>
    );
}

const WidgetContent = ({ children, color }) => {
    return (
        <div className="widget-content" style={{ color }}>
            {children}
        </div>
    );
}

const WidgetFooter = ({ children }) => {
    return (
        <div className="widget-footer">
            {children}
        </div>
    );
}

export {
    Widget, WidgetHeader, WidgetContent, WidgetFooter
};