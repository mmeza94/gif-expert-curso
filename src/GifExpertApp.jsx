import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";



export const GifExpertApp = ()=>{

    //Como regla no poner los hooks dentro de condicionales
    //El useState siempre se inicializa con un arreglo
    const [categories,setCategories] = useState(['One Punch','Dragon Ball']);

    console.log(categories);

    const onAddCategory = () => {
        //setCategories( [...categories,'Valorant'] );
        setCategories(cat=>[...cat , 'Valorant' ]); //Segunda opcion
    }



    return ( 
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory/>


            <button onClick={onAddCategory}>Agregar</button>

            {/* listado de gifs */}
            <ol>
                {categories.map( category => {
                    return <li key={ category }>{category}</li>
                })} 
            </ol>



        </>
    )
}







