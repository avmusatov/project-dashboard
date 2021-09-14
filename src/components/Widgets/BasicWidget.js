import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";
import Icon from "../Icon";

const BasicWidget = ({ title, value, label, footerText, color = "#000" }) => {
    return (
        <div className="widget-container">
            <WidgetHeader
                title={<div className="title transparent">{title}</div>}
                options={<Icon type="more" />} />
            <WidgetContent color={color}>
                <div className="value">{value}</div>
                <div className="label">{label}</div>
            </WidgetContent>
            <WidgetFooter>
                <div style={{ padding: "12px" }} className="transparent">{footerText}</div>
            </WidgetFooter>
        </div >
    );
}

export default BasicWidget;