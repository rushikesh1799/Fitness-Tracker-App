import React from "react";

const DashboardItem = ({ value, iconName }) => {
    return (
        <div className="dashboard_item">
            <i
                className={`fa fa-${iconName} fa-2x icons`}
                aria-hidden="true"
            ></i>
            <p className="value">{value}</p>
            <p className="item_desc">Calories Burned</p>
        </div>
    );
};

export default DashboardItem;
