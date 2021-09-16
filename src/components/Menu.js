import React from "react";
import MenuItem from "./MenuItem";
import { sidebarMenuList } from "../helpers/render-data";

const Menu = () => {
    return (
        <div className="menu">
            <div className="menu-section">
                <div className="section-title">APPLICATIONS</div>
                <ul className="menu-list">
                    {sidebarMenuList.map(({ id, title, icon, submenu, notification, expand }) => (
                        <MenuItem
                            key={id}
                            title={title}
                            icon={icon}
                            submenu={submenu}
                            notification={notification}
                            expand={expand}
                        />
                    ))}
                </ul>
            </div>
        </div >
    );
}

export default Menu;