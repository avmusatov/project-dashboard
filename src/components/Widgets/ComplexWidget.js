import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";

const ComplexWidget = ({ list, value, label, footerText, color = "#000" }) => {
    const headerTitle = (
        <div className="widget-select transparent">
            <select>
                {list.map(o => <option key={o}>{o}</option>)}
            </select>
        </div>
    );

    const headerOptions = (
        <div className="icon">
            <div className="options icon-img icon-more"></div>
        </div>
    );
    
    return (
        <div className="widget-container">
            <WidgetHeader title={headerTitle} options={headerOptions}>
            </WidgetHeader>
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

export default ComplexWidget;