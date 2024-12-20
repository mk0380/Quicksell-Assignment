import React from 'react';
import './usericon.css';

const UserIcon = ({ name, available }) => {
    const text = React.useMemo(() => {
        return name.split(" ").map((item) => item[0]).join("");
    }, [name]);

    return (
        <div className="usericon-container">
            <div className="usericon-text">{text.toUpperCase()}</div>
            <div className={`user-status ${available && "available"}`}></div>
        </div>
    );
};

export default UserIcon;
