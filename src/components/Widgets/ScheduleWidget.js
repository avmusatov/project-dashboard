import React from "react";
import { WidgetHeader, WidgetContent, WidgetFooter } from "./Widget";
import Select from "../Select";
import ItemList from "../ItemList";

const ScheduleWidget = ({ title, items, todoList, color = "#000" }) => {
    return (
        <div className="widget-container">
            <WidgetHeader
                title={<div className="title">{title}</div>}
                options={<Select items={items} />}
            />
            <WidgetContent color={color}>
                <ItemList items={todoList}/>
            </WidgetContent>
        </div >
    );
};

export default ScheduleWidget;