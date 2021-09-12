import React from "react";
import WidgetGrid from "./WidgetGrid";
import { Widget } from "./Widget";
import ComplexWidget from "./ComplexWidget";

const Main = () => {
    const widgets = [
        { type: ComplexWidget, size: 20, list: ["Yesterday", "Today", "Tomorrow"], value: 25, label: "Due Tasks", footerText: "Completed: 7", color: "rgb(33,150,243)" },
        { type: Widget, size: 20, title: "Overdue", value: 4, label: "Tasks", footerText: "Yesterday`s overdue: 2", color: "red" },
        { type: Widget, size: 20, title: "Issues", value: 32, label: "Open", footerText: "Closed today: 0", color: "orange" },
        { type: Widget, size: 20, title: "Features", value: 42, label: "Proposals", footerText: "Implemented: 8", color: "green" },
    ];

    return (
        <div className="main">
            <nav className="main-navigation">
                <ul>
                    <li className="main-navigation-item active">Home</li>
                    <li className="main-navigation-item">Budget Summary</li>
                    <li className="main-navigation-item">Team Members</li>
                </ul>
            </nav>
            <WidgetGrid widgets={widgets} />
        </div>
    );
}

export default Main;