import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Main from "./Main";
import userImage from "../css/img/Velazquez.jpg";
import ChatPanel from "./ChatPanel";
import contacts from "../css/img/contacts";

export default class App extends React.Component {
    state = {
        userName: "John Doe",
        userImage,
        userRole: "Guest"
    }

    render() {
        return (
            <div className="main-app">
                <Toolbar {...this.state} />
                <ChatPanel contacts={contacts} />
                <Header {...this.state} />
                <Main />
            </div>);
    }
}