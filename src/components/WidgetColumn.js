import React from "react";

const WidgetColumn = ({ widgets }) => {
    const renderWidgets = (widgets) => {
        return widgets.map((widget) => {
            const View = widget.type;

            return <li
                className="widget-wrapper"
                key={widget.id}
            >
                <View {...widget} />
            </li>;
        });
    }

    return (
        <ul className="widgets-column flex-row">
            {renderWidgets(widgets)}
        </ul>
    );
}

export default WidgetColumn;