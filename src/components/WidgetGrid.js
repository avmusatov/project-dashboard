import React from "react";

const WidgetGrid = ({ widgets }) => {
    const renderWidgets = (widgets) => {
        return widgets.map((widget) => {
            const View = widget.type;

            return <li
                style={{ width: `${widget.size}%` }}
                className="widget-wrapper"
                key={widget.id}
            >
                <View {...widget} />
            </li>;
        });
    }

    return (
        <ul className="widgets">
            {renderWidgets(widgets)}
        </ul>
    );
}

export default WidgetGrid;