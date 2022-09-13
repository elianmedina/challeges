import { useState } from "react";

export const AddCategory = ({ onAddCategory }) => {

    const [inputValue, setinputValue] = useState('')

    const onInputChange = (evt) => {
        setinputValue(evt.target.value)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        onAddCategory(inputValue);
        setinputValue('')
    }
    

    return (
        <>
            <input
                type="text"
                placeholder="Buscar"
                value={inputValue}
                onChange={(event) => onInputChange(event)}
            />
            <br />
            <br />
            <button onClick={(event) => onSubmit(event)}>Agregar</button>
        </>


    )
}