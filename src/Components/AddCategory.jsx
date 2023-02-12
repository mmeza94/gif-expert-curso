import { useState } from "react"



export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    // const onInputChanged = (event) => {
    //     console.log(event.target.value);
    //     setInputValue(event.target.value);
    // }


    //Segunda manera, desestructurando el evento
    const onInputChanged = ({target}) => {
            setInputValue(target.value);
        }


    const onSubmit = (event) => {
        event.preventDefault();
        
        if(inputValue.trim().length <= 1) return;

        //onNewCategory( categories => [...categories, inputValue] );
        onNewCategory( inputValue.trim() );
        setInputValue('');
    }


    return (
        <form onSubmit={ onSubmit }>
            <input type="text" 
                   placeholder="Buscar gifs" 
                   value={ inputValue }
                   onChange= { onInputChanged }/> {/*Puedo solo poner la referencia de la funcion (event) => onInputChanged(event) */}
        </form>
    )
}