import React from "react";
import WidgetRow from "./Widget";

const Main = () => {
    const widgets = [
        { title: "Overdue", value: 4, label: "Tasks", footerText: "Yesterday`s overdue: 2", color: "red" },
        { title: "Issues", value: 32, label: "Open", footerText: "Closed today: 0", color: "orange" },
        { title: "Features", value: 42, label: "Proposals", footerText: "Implemented: 8", color: "green" }
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
            <WidgetRow widgets={widgets} count={5} />
        </div>
    );
}

export default Main;