import React from "react";
import Menu from "./Menu";
import fuseLogo from "../css/img/icons/fuse.svg";
import reactLogo from "../css/img/icons/react.svg";

const Sidebar = ({ sidebarActive: isActive, closeSidebar, user }) => {
    return (
        <div className={`sidebar ${!isActive ? "hidden" : ""}`}>
            <div className="sidebar-logo">
                <div className="fuse-bar">
                    <img className="fuse-logo" src={fuseLogo} alt="fuse"></img>
                    <span className="fuse-caption">FUSE</span>
                </div>
                <div className="react-bar">
                    <img className="react-logo" src={reactLogo} alt="react"></img>
                    <span className="react-caption">React</span>
                </div>
                <div style={{ flex: "1 1 auto" }}></div>
                <div
                    onClick={closeSidebar}
                    className="icon close-sidebar"
                >
                    <div className="icon-img icon-list-white"></div>
                </div>
            </div>
            <div className="sidebar-content">
                <div className="sidebar-header">
                    <div className="sidebar-title flex-column">
                        <span className="username">{user.userName}</span>
                        <span className="user-email">{user.userEmail}</span>
                    </div>
                    <div className="user-avatar">
                        <img src={user.userImage} alt={user.userName} />
                    </div>
                </div>
                <Menu />
            </div>
        </div>
    );
}

export default Sidebar;