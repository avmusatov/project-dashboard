import React from "react";

const ItemList = ({ items }) => {
    return (
        <ul className="item-list">
            {items.map(({ id, left, right }) => {
                return (
                    <li
                        className="list-item flex-row-nowrap"
                        key={id}
                    >
                        {left}
                        {right}
                    </li>
                );
            })}
        </ul>
    );
}

export default ItemList;