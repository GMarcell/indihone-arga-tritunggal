"use client";

import { Typography } from "@material-tailwind/react";
import { CLIENTSName } from "@/constants";
import React, { useContext } from "react";
import langContext from "@/hooks/langContext";
import { customerWord } from "@/bilinggual/bilinggual";

export default function Customers() {
  const {language} = useContext(langContext)
  return (
    <section className="px-8 py-28 bg-gray-200" id="clients">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-8 !leading-tight text-4xl md:text-6xl text-center text-[#1C3A96] font-bold"
          placeholder=""
        >
          {customerWord[language]}
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTSName.map((logo, key): any => (
            <img
              key={key}
              alt={logo}
              width={1500}
              height={1500}
              className="w-52"
              src={`/logos/${logo}.png`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}