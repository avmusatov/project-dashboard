import React from "react";

const ItemList = ({ items }) => {
    return (
        <ul className="item-list">
            {items.map(({ title, subtitle }) => {
                return (
                    <li
                        className="list-item flex-row-nowrap"
                        key={title}
                    >
                        <div className="flex-column">
                            <div className="item-title">{title}</div>
                            <div className="item-subtitle transparent">{subtitle}</div>
                        </div>
                        <div className="icon">
                            <div className="options icon-img icon-more"></div>
                        </div>
                    </li>
                );
            })}
        </ul>
    );
}

export default ItemList;