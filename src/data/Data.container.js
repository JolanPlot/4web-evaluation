import React, { useState } from "react";
import ".Data.js";


const EnchanceData = props => {
    const [itemspage, setitemsPage] = useState(10);
    const [items, setItems]





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