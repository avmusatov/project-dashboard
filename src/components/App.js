import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";
import Main from "./Main";
import userImage from "../css/img/Velazquez.jpg";

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
                <div className="header-wrapper">
                    <div className="container">
                        <Header {...this.state} />
                    </div>
                </div>
                <div className="main-wrapper">
                    <div className="container">
                        <Main/>
                    </div>
                </div>
            </div>);
    }
}