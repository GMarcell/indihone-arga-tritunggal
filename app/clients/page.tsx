"use client";

import Image from "next/image";
import { Typography } from "@material-tailwind/react";
import { CLIENTSName } from "@/constants";

export function Clients() {
  return (
    <section className="px-8 py-28" id="clients">
      <div className="container mx-auto text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-8 !leading-tight text-4xl md:text-6xl text-center text-[#1C3A96] font-bold"
          placeholder=""
        >
          My awesome clients
        </Typography>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {CLIENTSName.map((logo, key) => (
            <Image
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

export default Clients;