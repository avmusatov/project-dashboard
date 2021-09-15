import React from "react";
import Avatar from "./Avatar";

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
            {renderContacts(important)}
            <div className="delimiter"></div>
            {renderContacts(other)}
        </ul>
    );
}

export default ChatPanel;