import { useState } from "react"
import { AddCategory, GifGrid } from "./Components";


export const GifExpertApp = ()=>{


    const [categories,setCagetory] = useState(['One Punch']);

    console.log(categories);

    const onAddCategory = (newCategory) => {
        if(categories.includes(newCategory)) return;
        //if(newCategory.title == " ") return;
        setCagetory( [newCategory,...categories  ] );
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







