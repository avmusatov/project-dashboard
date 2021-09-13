import React from "react";
import { WidgetHeader, WidgetContent } from "./Widget";
import Navigation from "../Navigation";

const GraphWidget = ({ title, mainGraph, graphList, color = "#000" }) => {
    const headerTitle = (
        <div className="title">{title}</div>
    );

    const headerOptions = (
        <Navigation items={[
            { header: "This Week", active: true },
            { header: "Last Week", active: false },
            { header: "2 Weeks Ago", active: false }
        ]} />
    );

    const graphGrid = (
        <ul className="graph-grid flex-row-wrap">
            {graphList.map(({ id, image }) => {
                return <li
                    className="graph-grid-item"
                    key={id}
                >
                    <img src={image} alt={id} />
                </li>;
            })}
        </ul>
    );

    return (
        <div className="widget-container flex-column">
            <WidgetHeader title={headerTitle} options={headerOptions} />
            <WidgetContent color={color}>
                <div className="flex-row-nowrap">
                    <div className="main-graph">
                        <img src={mainGraph} alt={title} />
                    </div>
                    {graphGrid}
                </div>
            </WidgetContent>
        </div >
    );
}

export default GraphWidget;