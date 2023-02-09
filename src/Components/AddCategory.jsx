import { useState } from "react"



export const AddCategory = () => {

    const [inputValue, setInputValue] = useState('One Punch');

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
        console.log(inputValue);
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