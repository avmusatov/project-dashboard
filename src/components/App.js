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
            userRole: "Guest",
            userEmail: "johndoe@withinpixels.com",
            userImage
        },
        sidebarActive: true,
    }

    openSidebar = () => {
        this.setState({ sidebarActive: true });
    }

    closeSidebar = () => {
        this.setState({ sidebarActive: false });
    }

    render() {
        const { user, sidebarActive } = this.state;

        return (
            <div className="main-app">
                <Sidebar
                    sidebarActive={sidebarActive}
                    closeSidebar={this.closeSidebar}
                    user={user}
                />
                <div className="app">
                    <Toolbar {...this.state} openSidebar={this.openSidebar} />
                    <ChatPanel contacts={contacts} />
                    <Header {...user} />
                    <Main />
                </div>
            </div>);
    }
}