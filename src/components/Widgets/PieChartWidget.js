import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";
import Select from "../Select";

const PieChartWidget = ({ title, list, graph, color = "#000" }) => {
    return (
        <div className="widget-container">
            <WidgetHeader
                title={<div className="title">{title}</div>}
                options={<Select items={list} />}
            />
            <WidgetContent color={color}>
                <div className="pie-widget-graph flex-row-nowrap">
                    <img src={graph} alt={title} />
                </div>
            </WidgetContent>
            <WidgetFooter>
                <div className="pie-widget-footer flex-row-nowrap">
                    <div className="flex-column">
                        <div className="value">594</div>
                        <div className="transparent">Task Added</div>
                    </div>
                    <div className="flex-column">
                        <div className="value">287</div>
                        <div className="transparent">Task Completed</div>
                    </div>
                </div>
            </WidgetFooter>
        </div >
    );
}

export default PieChartWidget;