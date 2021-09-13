import React from "react";

const WidgetHeader = ({ title, options }) => {
    return (
        <div className="widget-header flex-row-nowrap" >
            {title}
            {options}
        </div>
    );
}

const WidgetContent = ({ children, color }) => {
    return (
        <div className="widget-content flex-column" style={{ color }}>
            {children}
        </div>
    );
}

const WidgetFooter = ({ children }) => {
    return (
        <div className="widget-footer flex-row-nowrap">
            {children}
        </div>
    );
}

export {
    WidgetHeader, WidgetContent, WidgetFooter
};