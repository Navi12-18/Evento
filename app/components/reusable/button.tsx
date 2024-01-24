import React, {ChangeEvent, useState} from 'react';

interface ButtonComponentProps{
    label : String;
    onSubmit : (event : ChangeEvent<HTMLButtonElement>) => void;
}

const Button:React.FC<ButtonComponentProps> = ({label, onSubmit}) => {
  return (
    <button onSubmit={onSubmit} className = "p-3 bg-[#66666E] rounded-lg lg:w-full m-2 text-[#E6E6E9] hover:text-[#F4F4F6] hover:bg-[#000000] transition duration-300 ease-in-out">
        {label}
    </button>
  )
}

export default Button