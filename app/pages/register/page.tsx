"use client"

import Button from "@/app/components/reusable/button";
import Input from "@/app/components/reusable/input";
import { ChangeEvent, useState } from "react";


const page:React.FC = () => {
  const[email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const[firstName,setFirstName] = useState("");
  const[lastName,setLastName] = useState("");

  const handleFirstNameChange = (event : ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  }

  const handleLastNameChange = (event : ChangeEvent<HTMLInputElement>) =>{
    setLastName(event.target.value);
  }

  const handleEmailChange = (event : ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  }

  const handlePasswordChange = (event : ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  }

  const handleSubmit = () => {
    
  }
    
  return (
    <div className = "h-screen w-screen flex justify-center items-center">
      <div className = "border-[5px] rounded-lg w-[350px] p-4 flex flex-col justify-center items-center bg-[#E6E6E9] shadow-[#E6E6E9]">
        <div className = "mb-5 flex flex-col items-center">
          <h1 style={{fontFamily: 'Montserrat, sans-serif'}} className="text-[30px] font-sans font-bold ">Evento</h1>
          <h1 style={{fontFamily: 'Montserrat, sans-serif'}} className="text-[20px] font-sans font-bold ">Event management made easy</h1>
        </div>
        <p className="font-sans text-[20px] font-semibold">Register</p>
        <Input value = {firstName} onChange = {handleFirstNameChange} placeholder = "Enter First Name"></Input>
        <Input value = {lastName} onChange = {handleLastNameChange} placeholder = "Enter Last Name"></Input>
        <Input value = {email} onChange = {handleEmailChange} placeholder = "Enter Email"></Input>
        <Input value = {password} onChange = {handlePasswordChange} placeholder = "Enter Password"></Input>
        <Button label = "Login" onSubmit={handleSubmit}></Button>
      </div>
    </div>
  )
}

export default page