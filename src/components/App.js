import React from "react";
import Toolbar from "./Toolbar";

export default class App extends React.Component {
    render() {
        return (<div className="main-app">
            <Toolbar />
            <Header />
        </div>);
    }
}