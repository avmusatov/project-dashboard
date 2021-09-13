import React from "react";

const Navigation = ({ items }) => {
    const renderItems = (items) => {
        return items.map(({ header, active }) => {
            let classNames = "navigation-item";
            if (active) {
                classNames += " active";
            }

            return (
                <li className={classNames} key={header}>
                    {header}
                </li >);
        });
    }
    return (
        <nav className="navigation">
            <ul className="flex-row-nowrap">
                {renderItems(items)}
            </ul>
        </nav>
    );
}

export default Navigation;