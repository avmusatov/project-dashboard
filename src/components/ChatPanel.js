import React from "react";
import Avatar from "./Avatar";
import chat from "../css/img/chat.png";

const ChatPanel = ({ contacts }) => {
    const renderContacts = (contacts) => {
        return contacts.map(({ id, ...props }) => {
            return <li key={id}>
                <Avatar {...props} />
            </li>
        });
    }

    const [important, other] = [contacts.slice(0, 3), contacts.slice(3)];
    
    return (
        <ul className="chat-panel flex-column">
            <div className="chat"><img src={chat} alt="chat" /></div>
            {renderContacts(important)}
            <div className="delimiter"></div>
            {renderContacts(other)}
        </ul>
    );
}

export default ChatPanel;