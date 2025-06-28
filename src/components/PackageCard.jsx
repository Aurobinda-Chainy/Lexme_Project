import React from "react";

const PackageCard = ({ title, price }) => {
    return(
        <div>
            <h2 className="text-lg font-semibold mb-2">{title}</h2>
            <p className="text-sm text-gray-600">Starting from ₹ {price}</p>
        </div>
    )
}

export default PackageCard;