import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Main from "./Main";
import userImage from "../css/img/Velazquez.jpg";
import ChatPanel from "./ChatPanel";
import contacts from "../css/img/contacts";
import Sidebar from "./Sidebar";

export default class App extends React.Component {
    state = {
        user: {
            userName: "John Doe",
            userImage,
            userRole: "Guest"
        },
        sidebarActive: true,
    }

    toggleSidebar = () => {
        this.setState(({ sidebarActive }) => ({ sidebarActive: !sidebarActive }));
    }

    render() {
        const { user, sidebarActive } = this.state;

        return (
            <div className="main-app">
                <Sidebar sidebarActive={sidebarActive} />
                <div className="app">
                    <Toolbar {...this.state} toggleSidebar={this.toggleSidebar} />
                    <ChatPanel contacts={contacts} />
                    <Header {...user} />
                    <Main />
                </div>
            </div>);
    }
}