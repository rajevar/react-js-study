import React from 'react'

function Count({ value, title }) {
    console.log(" **** Count fun comp **** ");
    return (
        <div>
            {title} : {value}
        </div>
    )
}

export default React.memo(Count);
//export default Count;
