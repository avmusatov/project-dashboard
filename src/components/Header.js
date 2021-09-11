import React from "react";

const Header = ({ userName, userImage }) => {
    return (
        <div className="header">
            <div className="greeting">
                <img src={userImage} alt={userName} />
                <div className="greeting-main">
                    <div className="greeting-main-header">Welcome back, {userName}!</div>
                    <div className="notifications-info">
                        <div className="icon-img icon-bell"></div>
                        <span>You have 2 new messages and 15 new tasks!</span>
                    </div>
                </div>
            </div>
            <div className="">
                <div>ACME Corp. Backend App</div>
                <button>...</button>
            </div>
        </div>
    );
}

export default Header;