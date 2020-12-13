import { useState } from 'react'

import React from 'react'

function useInput(initialValue = '') {
    const [value, setValue] = useState(initialValue);
    const reset = function () {
        setValue(initialValue);
    }
    const bind = {
        value: value,
        onChange: e => setValue(e.target.value)
    }

    return [value, reset, bind];
}

export default useInput;
