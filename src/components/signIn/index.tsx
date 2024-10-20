'use client'
import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

export default function SignIn({toggle} : {toggle : () => {}}) {
  return (
    <div className="w-[400px] h-[380px] flex flex-col border-white border-[1px]  rounded-md shadow-lg shadow-zinc-950 drop-shadow-xl bg-black">
      <h1 className="mx-auto text-2xl font-bold text-white mt-4">Sign In</h1>

      <p className="text-white text-[14px] px-5 mt-6">Already have an account? <span  className="underline cursor-pointer" onClick={() => toggle()}>Sign up</span> </p>
    <form className="mt-6  flex-1">
      <div className="px-5 ">
        <label className="text-white text-[14px]" htmlFor="identifier">Enter your email or username</label>
      <Input name="identifier" placeholder="enter your email or username" />
      </div>
      <div className="px-5 my-6">
        <label className="text-white text-[14px]" htmlFor="identifier">Enter your password</label>
      <Input type="password" name="password" placeholder="enter your password" />
      </div>
      <div className="mt-8 w-full px-5 h-12">
        <Button className="w-full h-full">Sign In</Button>
      </div>
    </form>

    </div>
  );
}
