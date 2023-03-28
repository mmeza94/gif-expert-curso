
import { useState, useEffect } from "react";
import { GetGifs } from "../Helpers/GetGifs";



export const  useFetchGifs = ( category ) =>{


    //Desde aqui, se redibuja el contenido de images, este se desestructura en donde el hook esta implementado y se utiliza en el map
    const [images, setImages] = useState([]);
    const [isLoading, setisLoading] = useState(true)



    const GetImages = async () => {
        const newImages = await GetGifs( category );
        setImages(newImages);
        setisLoading(false);
    }



    useEffect(
       () => { 
        GetImages();
     } ,//Esto es lo que quiero que se ejecute
       [] //si la lista de dependendia es un arreglo vacio significa que se ejecutara solo la primera vez
    );




    return {
        images,
        isLoading
    }

}