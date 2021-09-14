import React from "react";
import { WidgetHeader, WidgetContent } from "./Widget";
import Select from "../Select";
import ItemList from "../ItemList";
import Icon from "../Icon";

const ScheduleWidget = ({ title, items, todoList, color = "#000" }) => {
    const itemList = todoList.map(({ id, title, subtitle }) => {
        return {
            id,
            left: (
                <div className="flex-column">
                    <div className="item-title">{title}</div>
                    <div className="item-subtitle transparent">{subtitle}</div>
                </div>
            ),
            right: <Icon type="more" />
        }
    });

    return (
        <div className="widget-container">
            <WidgetHeader
                title={<div className="title">{title}</div>}
                options={<Select items={items} />}
            />
            <WidgetContent color={color}>
                <ItemList items={itemList} />
            </WidgetContent>
        </div >
    );
};

export default ScheduleWidget;