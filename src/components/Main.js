import React from "react";
import WidgetGrid from "./WidgetGrid";
import Navigation from "./Navigation";
import BasicWidget from "./Widgets/BasicWidget";
import ComplexWidget from "./Widgets/ComplexWidget";
import GraphWidget from "./Widgets/GraphWidget";
import { barChart, pieChart, graphList } from "../css/img/graphs";
import PieChartWidget from "./Widgets/PieChartWidget";
import ScheduleWidget from "./Widgets/ScheduleWidget";

const Main = () => {
    const todoList = [
        { title: "Group Meeting", subtitle: "In 32 minutes" },
        { title: "Coffee Break", subtitle: "10:30 AM" },
        { title: "Public Beta Release", subtitle: "11:00 AM" },
        { title: "Lunch", subtitle: "12:10 PM" },
        { title: "Dinner with David", subtitle: "17:30 PM" },
        { title: "Jane's Birthday Party", subtitle: "19:30 PM" },
        { title: "Overseer's Retirement Party", subtitle: "21:30 PM" },
    ];

    const widgets = [
        { id: 1, type: ComplexWidget, size: 25, list: ["Yesterday", "Today", "Tomorrow"], value: 25, label: "Due Tasks", footerText: "Completed: 7", color: "rgb(33,150,243)" },
        { id: 2, type: BasicWidget, size: 25, title: "Overdue", value: 4, label: "Tasks", footerText: "Yesterday`s overdue: 2", color: "red" },
        { id: 3, type: BasicWidget, size: 25, title: "Issues", value: 32, label: "Open", footerText: "Closed today: 0", color: "orange" },
        { id: 4, type: BasicWidget, size: 25, title: "Features", value: 42, label: "Proposals", footerText: "Implemented: 8", color: "green" },
        { id: 5, type: GraphWidget, size: 100, title: "Github Issues", mainGraph: barChart, graphList },
        { id: 6, type: PieChartWidget, size: 50, title: "Task Distribution", list: ["This week", "Last week", "2 Weeks Ago"], graph: pieChart },
        { id: 7, type: ScheduleWidget, size: 50, title: "Schedule", items: ["Today", "Tomorrow"], todoList },

    ];

    const navItems = [
        { header: "Home", active: true },
        { header: "Budget Summary", active: false },
        { header: "Team Members", active: false }
    ];

    return (
        <div className="main">
            <Navigation items={navItems} />
            <WidgetGrid widgets={widgets} />

        </div>
    );
}

export default Main;