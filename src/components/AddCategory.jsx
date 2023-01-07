import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');
    
    const onInputchange = ({target}) => {
        setInputValue(target.value);
    }
    const onSubmit = (event) =>{
        event.preventDefault(); 
        if (inputValue.trim().length <= 1) return;
        //setCategories( categories =>[inputValue, ...categories] );
        setInputValue('');
        onNewCategory(inputValue.trim());
    }
  return (
    <form onSubmit={ onSubmit } aria-label="form">
        <input 
        type="text" 
        placeholder="Buscar GIFS"
        value={ inputValue }
        onChange={ onInputchange }
        />
    </form>
    
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
}

