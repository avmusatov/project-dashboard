import React from "react";
import Toolbar from "./Toolbar";
import Header from "./Header";

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
                <div className="wrapper">
                    <div className="container">
                        <Header {...this.state} />
                    </div>
                </div>
            </div>);
    }
}