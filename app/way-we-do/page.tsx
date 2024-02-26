"use client";

import { Typography } from "@material-tailwind/react";
import Image from "next/image";
import SMS from '@/assets/SMS.png'
import QMS from '@/assets/QMS.png'

export function WayWeDo() {
  return (
    <section className="py-28 px-8 bg-[url('/image/WayWeDo.png')] bg-cover" id="products">
      <div className="container mx-auto mb-10 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="!leading-tight text-3xl md:text-7xl text-center font-black text-[#162B4E]"
          placeholder=""
        >
          The Way We Do
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2">
        <Image src={SMS} alt="SMS" />
        <Image src={QMS} alt="QMS"/>
      </div>
    </section>
  );
}

export default WayWeDo;