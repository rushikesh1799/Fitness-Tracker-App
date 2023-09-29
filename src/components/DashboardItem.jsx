import React from "react";
import Loader from "./Loader";

const DashboardItem = ({ value, iconName, desc }) => {
    return (
        <div className="dashboard_item">
            <i
                className={`fa fa-${iconName} fa-2x icons`}
                aria-hidden="true"
            ></i>
            {value ? <p className="value">{value}</p> : <Loader />}
            <p className="item_desc">{desc}</p>
        </div>
    );
};

export default DashboardItem;
