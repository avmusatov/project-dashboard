import React from "react";
import ItemList from "../ItemList";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";
import Icon from "../Icon";

const WeatherWidget = ({ city, weatherForecast }) => {
    const headerTitle = (
        <div className="flex-row-nowrap">
            <div style={{ marginRight: "10px" }} className="icon icon-img icon-location"></div>
            <div className="title transparent">{city}</div>
        </div>
    );

    const itemList = weatherForecast.map(({ id, day, temperature, icon }) => {
        return {
            id,
            left: (
                <div className="flex-column">
                    <div style={{ fontSize: "1.1rem" }}>{day}</div>
                </div>
            ),
            right: (
                <div className="flex-row-nowrap">
                    <div style={{ marginRight: "10px" }} className={`icon-img ${icon}`}></div>
                    <div style={{ fontSize: "1.5rem" }}>{temperature} <span className="transparent">°C</span></div>
                </div>
            )
        }
    });

    return (
        <div className="widget-container">
            <WidgetHeader
                title={headerTitle}
                options={<Icon type="more" />}
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
                <ItemList items={itemList} />
            </WidgetFooter>
            <div style={{ paddingTop: "20px" }}></div>
        </div >
    );
}

export default WeatherWidget;