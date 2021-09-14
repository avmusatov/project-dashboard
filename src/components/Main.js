import React from "react";
import WidgetGrid from "./WidgetGrid";
import Navigation from "./Navigation";
import BasicWidget from "./Widgets/BasicWidget";
import ComplexWidget from "./Widgets/ComplexWidget";
import GraphWidget from "./Widgets/GraphWidget";
import { barChart, pieChart, graphList } from "../css/img/graphs";
import PieChartWidget from "./Widgets/PieChartWidget";
import ScheduleWidget from "./Widgets/ScheduleWidget";
import TimeWidget from "./Widgets/TimeWidget";
import WeatherWidget from "./Widgets/WeatherWidget";
import WidgetColumn from "./WidgetColumn";

const Main = () => {
    const todoList = [
        { id: 1, title: "Group Meeting", subtitle: "In 32 minutes" },
        { id: 2, title: "Coffee Break", subtitle: "10:30 AM" },
        { id: 3, title: "Public Beta Release", subtitle: "11:00 AM" },
        { id: 4, title: "Lunch", subtitle: "12:10 PM" },
        { id: 5, title: "Dinner with David", subtitle: "17:30 PM" },
        { id: 6, title: "Jane's Birthday Party", subtitle: "19:30 PM" },
        { id: 7, title: "Overseer's Retirement Party", subtitle: "21:30 PM" },
    ];

    const weatherForecast = [
        { id: 1, day: "Sunday", temperature: 21, icon: "icon-rain" },
        { id: 2, day: "Monday", temperature: 19, icon: "icon-wind" },
        { id: 3, day: "Tuesday", temperature: 24, icon: "icon-cloud" },
        { id: 4, day: "Wednesday", temperature: 21, icon: "icon-rain" },
        { id: 5, day: "Thursday", temperature: 24, icon: "icon-cloud" },
    ];

    const widgetsInGrid = [
        { id: 1, type: ComplexWidget, size: 25, list: ["Yesterday", "Today", "Tomorrow"], value: 25, label: "Due Tasks", footerText: "Completed: 7", color: "rgb(33,150,243)" },
        { id: 2, type: BasicWidget, size: 25, title: "Overdue", value: 4, label: "Tasks", footerText: "Yesterday`s overdue: 2", color: "red" },
        { id: 3, type: BasicWidget, size: 25, title: "Issues", value: 32, label: "Open", footerText: "Closed today: 0", color: "orange" },
        { id: 4, type: BasicWidget, size: 25, title: "Features", value: 42, label: "Proposals", footerText: "Implemented: 8", color: "green" },
        { id: 5, type: GraphWidget, size: 100, title: "Github Issues", mainGraph: barChart, graphList },
        { id: 6, type: PieChartWidget, size: 50, title: "Task Distribution", list: ["This week", "Last week", "2 Weeks Ago"], graph: pieChart },
        { id: 7, type: ScheduleWidget, size: 50, title: "Schedule", items: ["Today", "Tomorrow"], todoList },
    ];

    const widgetsInColumn = [
        { id: 1, type: TimeWidget, size: 25 },
        { id: 2, type: WeatherWidget, size: 25, city: "New York", weatherForecast },
    ];

    const navItems = [
        { header: "Home", active: true },
        { header: "Budget Summary", active: false },
        { header: "Team Members", active: false }
    ];

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