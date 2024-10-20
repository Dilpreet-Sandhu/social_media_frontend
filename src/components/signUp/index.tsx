"use client";
import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Avatar, IconButton } from "@mui/material";
import { CameraAlt as CameraIcon } from "@mui/icons-material";
import {useFileHandler} from '6pp';
import axios from 'axios';

export default function SignUp({ toggle }: { toggle: () => {} }) {
  const [tags, setTags] = useState<string[]>([]);
  const [inputVal, setInputVal] = useState("");
  const avatar = useFileHandler("single");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    const userData = {
      username,
      email,
      password,
      tags,
      avatar : avatar.file
    };

    if (!userData) return;

    try {

      const res = await axios.postForm("http://localhost:4000/api/users/sign-up",userData);

      if (res.data.success) {
        console.log("form submitted");
        console.log(res.data);
      }

     
    }catch (err) {
      console.log("error while registering user: ",err);
      
    }

  };

  function addTag() {
    setTags((prev) => [...prev, inputVal]);
    setInputVal("");
  }

  function removeTag(idx: number) {
    const dublicate = [...tags];

    dublicate.splice(idx, 1);

    setTags(dublicate);
  }

  return (
    <div className="w-[400px] h-[680px] flex flex-col border-white border-[1px]  rounded-md shadow-lg shadow-zinc-950 drop-shadow-xl bg-black">
      <h1 className="text-white font-bold text-2xl mx-auto mt-4">Sign Up</h1>
      <p className="text-white text-[14px] mx-4 mt-4">
        Alredy have an account !{" "}
        <span onClick={() => toggle()} className="underline cursor-pointer">
          Sign In
        </span>
      </p>

      <form onSubmit={handleSubmit} className="mt-6  flex-1">
        <div className="w-full flex flex-col gap-1 items-center">
          <Avatar  sx={{
                      width: "60px",
                      height: "60px",
                      objectFit: "contain",
                    }} src={avatar.preview || ""}/>
            <label htmlFor="filebtn" className="cursor-pointer">
              <CameraIcon htmlColor="white"/>
            </label>
            <Input onChange={avatar.changeHandler} id="filebtn"  className="p-0 m-0 w-0 h-0" required={false} type="file" />

        </div>
        <div className="px-5 ">
          <label className="text-white text-[14px]" htmlFor="username">
            Enter your username{" "}
          </label>
          <Input name="username" placeholder="enter your usernmae " />
        </div>
        <div className="px-5 my-6">
          <label className="text-white text-[14px]" htmlFor="email">
            Enter your email{" "}
          </label>
          <Input name="email" placeholder="enter your email " />
        </div>
        <div className="px-5 mt-6 mb-3">
          <label className="text-white text-[14px]" htmlFor="identifier">
            Enter your password
          </label>
          <Input
            type="password"
            name="password"
            placeholder="enter your password"
          />
        </div>
        <div className="mt-2 px-5 w-full h-28">
          <label htmlFor="" className="text-white text-[14px] ">
            tags
          </label>
          <div className="w-full flex flex-col h-full mt-1 rounded-md">
            <div className="flex flex-1 overflow-x-scroll scrollbar-hidden rounded-md  bg-zinc-400 mb-4 gap-3 mt-2">
              {tags.map((tag, idx) => (
                <div
                  key={idx}
                  className="w-28 h-8 mt-2 flex-shrink-0 ml-1 flex items-center justify-between px-2 bg-white rounded-md"
                >
                  <p className="text-black font-base text-[16px]">{tag}</p>
                  <span
                    className="cursor-pointer"
                    onClick={() => removeTag(idx)}
                  >
                    x
                  </span>
                </div>
              ))}
            </div>
            <div className="flex">
              <Input
                name="tag"
                placeholder="add new tag"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
              />
              <Button onClick={() => addTag()} className="ml-4">
                Add
              </Button>
            </div>
          </div>
        </div>
        <div className="mt-10 w-full px-5 h-12">
          <Button type="submit" className="w-full h-full">
            Sign Up
          </Button>
        </div>
      </form>
    </div>
  );
}
