import { GetGifs } from "../Helpers/GetGifs";
import { useState, useEffect } from "react";
import { GifItem } from '/src/Components/GifItem'
import { useFetchGifs } from "../Hooks/useFetchGifs";


export const GifGrid =  ({category}) => {

    //Esto es un customHook
    const { images, isLoading } = useFetchGifs ( category );


    

    

    return (
        <>
            <h3>{category}</h3>

            {/* {
                isLoading
                ? ( <h2>Cargando...</h2>)
                : null
            } */}


            {/* Esto es lo mismo que la validacion de arriba */}
            {
                isLoading && ( <h2>Cargando...</h2>)
            }



        
            <div className = "card-grid">{
                // images.map( img => (
                //     <li key={img.id}>{img.title}</li>
                // ))
                
                images.map( (image) => (
                    <GifItem key = {image.id} { ...image }/>
                ) )
            }
            </div>
            
        </>
    )



}







