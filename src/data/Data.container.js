import React, { useState } from "react";
import "./Data.css";
import Array from "./Data"


const EnchanceData = props => {
    const [itemspage, setitemsPage] = useState(10);
    const [items, setItems] = useState("")


    return (
        <Array {...props}
            itemspage={itemspage}
            setitemsPage={setitemsPage}
            items={items}
            setItems={setItems}

        />
    );

}

export default EnchanceData;