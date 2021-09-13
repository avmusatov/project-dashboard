import React from "react";

const Select = ({ items }) => {
    return (
        <div className="select transparent">
            <select>
                {items.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    );
}

export default Select;