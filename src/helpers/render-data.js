import { menuIcons } from "../css/img/icons";
import BasicWidget from "../components/Widgets/BasicWidget";
import ComplexWidget from "../components/Widgets/ComplexWidget";
import GraphWidget from "../components/Widgets/GraphWidget";
import { barChart, pieChart, graphList } from "../css/img/graphs";
import PieChartWidget from "../components/Widgets/PieChartWidget";
import ScheduleWidget from "../components/Widgets/ScheduleWidget";
import TimeWidget from "../components/Widgets/TimeWidget";
import WeatherWidget from "../components/Widgets/WeatherWidget";


// SIDEBAR

const sidebarMenuList = [
    {
        id: 1, title: "Dashboards", icon: menuIcons[3], expand: true,
        submenu: [
            { id: 1, title: "Analytics" },
            { id: 2, title: "Project", active: true }
        ]
    },
    {
        id: 2, title: "Calendar", icon: menuIcons[0]
    },
    {
        id: 3, title: "E-Commerce", icon: menuIcons[2], submenu: [
            { id: 1, title: "Products" },
            { id: 2, title: "Product Detail" },
            { id: 3, title: "Orders" },
            { id: 4, title: "Order Details" },
        ]
    },
    {
        id: 4, title: "Academy", icon: menuIcons[1]
    },
    {
        id: 5, title: "Mail", icon: menuIcons[4], notification: { count: 5 }
    },
    {
        id: 6, title: "Contacts", icon: menuIcons[5]
    },
    {
        id: 7, title: "To-Do", icon: menuIcons[5], notification: { count: 2, status: "important" }
    },
    {
        id: 8, title: "File Manager", icon: menuIcons[7]
    },
];

// TOOLBAR

const toolbarIconsLeftProps = [
    { type: "calendar", label: "Calendar" },
    { type: "mail", label: "Mail" },
    { type: "contact-book", label: "Contact" },
    { type: "todolist", label: "ToDo list" },
    { type: "star", label: "Start" },
];

const toolbarIconsRightProps = [
    { type: "font" },
    { type: "fullscreen" },
    { type: "search", label: "Search" },
    { type: "bookmark" },
    { type: "bell" },
];

//MAIN NAVIGATION

const navItems = [
    { header: "Home", active: true },
    { header: "Budget Summary", active: false },
    { header: "Team Members", active: false }
];

// WIDGETS

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
    { id: 1, type: ComplexWidget, size: "quater", list: ["Yesterday", "Today", "Tomorrow"], value: 25, label: "Due Tasks", footerText: "Completed: 7", color: "rgb(33,150,243)" },
    { id: 2, type: BasicWidget, size: "quater", title: "Overdue", value: 4, label: "Tasks", footerText: "Yesterday`s overdue: 2", color: "red" },
    { id: 3, type: BasicWidget, size: "quater", title: "Issues", value: 32, label: "Open", footerText: "Closed today: 0", color: "orange" },
    { id: 4, type: BasicWidget, size: "quater", title: "Features", value: 42, label: "Proposals", footerText: "Implemented: 8", color: "green" },
    { id: 5, type: GraphWidget, size: "full", title: "Github Issues", mainGraph: barChart, graphList },
    { id: 6, type: PieChartWidget, size: "half", title: "Task Distribution", list: ["This week", "Last week", "2 Weeks Ago"], graph: pieChart },
    { id: 7, type: ScheduleWidget, size: "half", title: "Schedule", items: ["Today", "Tomorrow"], todoList },
];

const widgetsInColumn = [
    { id: 1, type: TimeWidget, size: 25 },
    { id: 2, type: WeatherWidget, size: 25, city: "New York", weatherForecast },
];

export {
    sidebarMenuList,
    toolbarIconsLeftProps,
    toolbarIconsRightProps,
    widgetsInGrid,
    widgetsInColumn,
    navItems
};