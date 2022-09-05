import { useState } from "react"


export const Lista = () => {


    const [valor, setValor] = useState([]);
    

    const agregarCategoria = () => {



        const num = document.getElementById('categoria').value

        setValor(list => [...list,num])
        document.getElementById('categoria').value = ''
       
    }

    




    return (
        <div className="mt-5">
            <h1 class='titulos'>Challenge 3</h1>
            <span>Ingrese una Categoria: </span>
            <br />
            <input type='text' id='categoria'></input>
            <br />
            <button onClick={agregarCategoria}>Agregar</button>
            <br />
            <br />
            <ol >{
                (valor.map(
                    (num, key) => {
                        return <li key={key}>{num}</li>
                    }
                ))

            }
            </ol>

        </div>
    )
}