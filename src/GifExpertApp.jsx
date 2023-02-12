import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";



export const GifExpertApp = ()=>{

    //Como regla no poner los hooks dentro de condicionales
    //El useState siempre se inicializa con un arreglo
    const [categories,setCagetory] = useState(['One Punch','Dragon Ball']);

    console.log(categories);

    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        setCagetory( [...categories , newCategory] );
        //onNewCategory(cat=>[...cat , 'Valorant' ]); //Segunda opcion
    }



    return ( 
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory 
                onNewCategory = { (event) => onAddCategory(event) }
                // setCategories = { setCategories } {/* aqui en el prop mandamos la referencia de la funcion que modifica el estado de categories */}
            /> 


            {/* <button onClick={onAddCategory}>Agregar</button> */}

            {/* listado de gifs */}
            <ol>
                {categories.map( category => {
                    return <li key={ category }>{category}</li>
                })} 
            </ol>



        </>
    )
}







