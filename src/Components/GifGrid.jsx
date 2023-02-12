import { GetGifs } from "../Helpers/GetGifs";
import { useState, useEffect } from "react";



export const GifGrid =  ({category}) => {



    useEffect(
       () => { GetGifs( category ) } ,//Esto es lo que quiero que se ejecute
       [] //si la lista de dependendia es un arreglo vacio significa que se ejecutara solo la primera vez
    );

    

    return (
        <>
            <h3>{category}</h3>
            <p>Hola Mundo</p>
        </>
    )



}







