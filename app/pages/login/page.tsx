"use client";
import Button from "@/app/components/reusable/button";
import { useState, ChangeEvent } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Input } from "@/components/ui/input"

interface login {
  name: String;
}

const page: React.FC = () => {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = () => {};

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="text-[30px] font-bold">Evento</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent className="grid">
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;
