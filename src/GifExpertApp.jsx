import { useState } from "react"




export const GifExpertApp = ()=>{

    //Como regla no poner los hooks dentro de condicionales
    //El useState siempre se inicializa con un arreglo
    const [categories,setCategories] = useState(['One Punch','Dragon Ball']);

    console.log(categories);

    const AddCategory = () => {
        //setCategories( [...categories,'Valorant'] );
        setCategories(cat=>[...cat , 'Valorant' ]); //Segunda opcion
    }



    return ( 
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}



            <button onClick={AddCategory}>Agregar</button>

            {/* listado de gifs */}
            <ol>
                {categories.map( category => {
                    return <li key={ category }>{category}</li>
                })} 
            </ol>



        </>
    )
}







