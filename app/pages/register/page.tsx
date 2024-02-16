"use client";
import { useRouter } from "next/navigation";
import { useState, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


const page:React.FC = () => {
  const router = useRouter();
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

  const handleRegister = () => {
    router.push('/pages/login');
  }
    
  return (
    <div className = "bg-black h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="text-[30px] font-bold">Evento</CardTitle>
          <CardDescription>Event management made easy</CardDescription>
        </CardHeader>
        <CardContent className="grid space-y-4">
          <Input placeholder="First Name"/>
          <Input placeholder="Last Name"/>
          <Input placeholder="Your Email"/>
          <Input placeholder="Your Password"/>
        </CardContent>
        <CardContent>
          <Button className="w-full py-4">SignUp</Button>
        </CardContent>
        <CardFooter className="w-full flex justify-center">
          <CardContent className="text-[14px]">Already Registered?<Button variant="link" onClick={handleRegister}>Login</Button></CardContent>
        </CardFooter>
      </Card>
    </div>
  )
}

export default page