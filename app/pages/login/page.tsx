"use client";
import Button from "@/app/components/reusable/button";
import Input from "@/app/components/reusable/input";
import { useState,ChangeEvent} from "react";

interface login{
    name : String
}

const page: React.FC = () => {
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');

  const handleEmailChange = (event : ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
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
        <p className="font-sans text-[20px] font-semibold">Login</p>
        <Input value = {emailValue} onChange = {handleEmailChange} placeholder = "Enter email"></Input>
        <Input value = {passwordValue} onChange = {handlePasswordChange} placeholder = "Enter password"></Input>
        <Button label = "Login" onSubmit={handleSubmit}></Button>
      </div>
    </div>
  )
}

export default page;