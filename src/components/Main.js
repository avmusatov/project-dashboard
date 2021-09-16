import React from "react";
import WidgetGrid from "./WidgetGrid";
import Navigation from "./Navigation";
import WidgetColumn from "./WidgetColumn";
import { widgetsInGrid, widgetsInColumn, navItems } from "../helpers/render-data";

const Main = () => {
    return (
        <div className="main-wrapper">
            <div className="container">
                <div className="main">
                    <Navigation items={navItems} />
                    <div className="widgets-section">
                        <WidgetGrid widgets={widgetsInGrid} />
                        <WidgetColumn widgets={widgetsInColumn} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;