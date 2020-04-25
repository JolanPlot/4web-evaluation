import React, { useState, useEffect } from "react";
import "./Data.css";
import Array from "./Data"
import axios from 'axios'

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