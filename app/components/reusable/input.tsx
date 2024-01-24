import React, { ChangeEvent } from 'react'

interface inputComponentProps{
    onChange : (event: ChangeEvent<HTMLInputElement>) => void;
    value : string;
    placeholder? : string;
}

const Input: React.FC<inputComponentProps> = ({value,onChange,placeholder}) => {
  return (
    <input onChange={onChange} value = {value} placeholder = {placeholder} className = "p-2 focus:border-[#9999A1] rounded-lg w-full my-2"></input>
  )
}

export default Input;