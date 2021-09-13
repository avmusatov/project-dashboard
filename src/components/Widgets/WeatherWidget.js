import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";

const WeatherWidget = ({ city }) => {
    const headerTitle = (
        <div className="flex-row-nowrap">
            <div style={{ marginRight: "10px" }} className="icon icon-img icon-location"></div>
            <div className="title transparent">{city}</div>
        </div>
    );

    const headerOptions = (
        <div className="icon">
            <div className="options icon-img icon-more"></div>
        </div>
    );

    return (
        <div className="widget-container">
            <WidgetHeader
                title={headerTitle}
                options={headerOptions}
            />
            <WidgetContent>
                <div className="weather flex-column">
                    <div className="weather-main flex-row-nowrap transparent">
                        <div style={{ marginRight: "10px" }} className="icon icon-img icon-rain"></div>
                        <div>22°C</div>
                    </div>
                    <ul className="additional-info flex-row-nowrap">
                        <li className="flex-row-nowrap">
                            <div className="icon icon-img icon-wind"></div>
                            <div>12 KMH</div>
                        </li>
                        <li className="flex-row-nowrap">
                            <div className="icon icon-img icon-compass"></div>
                            <div>NW</div>
                        </li>
                        <li className="flex-row-nowrap">
                            <div className="icon icon-img icon-water"></div>
                            <div>98%</div>
                        </li>
                    </ul>
                </div>
            </WidgetContent >
            <WidgetFooter>
                <div className="flex-column">
                    <div> footer </div>
                </div>
            </WidgetFooter>
        </div >
    );
}

export default WeatherWidget;