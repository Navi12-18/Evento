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

interface login {
  name: String;
}

const page: React.FC = () => {
  const router = useRouter();
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmailValue(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPasswordValue(event.target.value);
  };

  const handleSubmit = () => {};

  const handleRegister = () => {
    router.push('/pages/register');
  }

  return (
    <div className="bg-black h-screen flex justify-center items-center">
      <Card className="w-[350px]">
        <CardHeader className="text-center">
          <CardTitle className="text-[30px] font-bold">Evento</CardTitle>
          <CardDescription>Login to your account</CardDescription>
        </CardHeader>
        <CardContent className="grid space-y-4">
          <Input placeholder="Email"/>
          <Input placeholder="Password"/>
        </CardContent>
        <CardContent>
          <Button className="w-full py-4">Login</Button>
        </CardContent>
        <CardFooter className="w-full flex justify-center">
          <CardContent className="text-[14px]">Register here if haven't<Button variant="link" onClick={handleRegister}>Register</Button></CardContent>
        </CardFooter>
      </Card>
    </div>
  );
};

export default page;