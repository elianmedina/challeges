import { useState } from "react"


export const Counter = () => {

    const [counter, setCounter] = useState(0);




    const handlesUMAR = () => {
        setCounter(counter+1)
    }

    const handleSubstract = () => {
        setCounter(counter-1)
    }

    const handleReset = () => {
        setCounter(0)
    }


    return (
        <div className="mt-5">
            <h1 class='titulos'>Challenge 2</h1>
            <span >Contador: {counter}</span>
            <br/>
            <button onClick={handlesUMAR}>Sumar</button>
            <button onClick={handleSubstract}>Restar</button>
            <button onClick={handleReset}>Resetear</button>
            
        </div>
    )
}