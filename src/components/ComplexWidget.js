import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";

const ComplexWidget = ({ list, value, label, footerText, color = "#000" }) => {
    return (
        <div className="widget">
            <WidgetHeader>
                <div className="widget-select">
                    <select>
                        {list.map(o => <option key={o}>{o}</option>)}
                    </select>
                </div>
            </WidgetHeader>
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

export default ComplexWidget;