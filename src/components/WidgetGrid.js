import React from "react";

const WidgetGrid = ({ widgets }) => {
    const renderWidgets = (widgets) => {
        return widgets.map((widget) => {
            const View = widget.type;

            return <li
                className={`widget-wrapper ${widget.size}-width`}
                key={widget.id}
            >
                <View {...widget} />
            </li>;
        });
    }

    return (
        <ul className="widgets flex-wrap">
            {renderWidgets(widgets)}
        </ul>
    );
}

export default WidgetGrid;