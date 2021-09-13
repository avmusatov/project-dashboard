import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";
import Select from "../Select";

const ComplexWidget = ({ list, value, label, footerText, color = "#000" }) => {
    const headerOptions = (
        <div className="icon">
            <div className="options icon-img icon-more"></div>
        </div>
    );

    return (
        <div className="widget-container">
            <WidgetHeader title={<Select items={list} />} options={headerOptions}>
            </WidgetHeader>
            <WidgetContent color={color}>
                <div className="value">{value}</div>
                <div className="label">{label}</div>
            </WidgetContent>
            <WidgetFooter>
                <div style={{padding: "12px"}} className="transparent">{footerText}</div>
            </WidgetFooter>
        </div >
    );
}

export default ComplexWidget;