import React from 'react'

function Button({ setter, title }) {
    console.log(" **** Button fun comp **** ");
    return (
        <div>
            <button className="btn btn-sm btn-warning ml-2 mt-1" onClick={setter}> {title}</button>
        </div>
    )
}
export default React.memo(Button);
//export default Button;
