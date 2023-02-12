import { useState } from "react"
import { AddCategory } from "./Components/AddCategory";
import { GifGrid } from "./Components/GifGrid";



export const GifExpertApp = ()=>{


    const [categories,setCagetory] = useState(['One Punch']);

    console.log(categories);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        setCagetory( [...categories , newCategory] );
    }



    return ( 
        <>
            <h1>GifExpertApp</h1>


            <AddCategory 
                onNewCategory = { (event) => onAddCategory(event) }
            /> 


           
            {
                categories.map( ( category ) => (
                    <GifGrid
                        key={category} 
                        category = {category}
                    />
                ))
                
            }
            
            

        </>
    )
}







