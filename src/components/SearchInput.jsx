import { useState } from "react"


export const SearchInput = ({onNewValue, value}) => {

    const onChangeValue = ({ target }) => {
        onNewValue(target.value);
    }

    return (
        <input
            className="input with-2"
            type="text"
            placeholder="type a task"
            value={value}
            onChange={onChangeValue} />
    )
}
