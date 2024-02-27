"use client";

import React from "react";
import certificate from "@/assets/certificate.jpg";
import ujiMutu from "@/assets/ujiMutu.png";
import Image from "next/image";
import {
  Typography,
} from "@material-tailwind/react";

function Authorization() {
  return (
    <div className="bg-[url('/image/Auth.png')] bg-cover" id='authorization'>
      <div className="container h-full min-h-[80vh] w-full flex items-center mx-auto py-auto">
        
          <div className="p-10 flex justify-content items-center flex-col">
            <div className="">
              <Typography
                placeholder=""
                className=" !leading-tight text-3xl md:text-5xl text-center text-[#1C3A96] font-bold"
                variant="h2"
              >
                Authorization
              </Typography>
              <Typography
                placeholder=""
                className="lg:text-2xl text-center md:my-5 text-black"
              >
                Since 2023, We are appointed as Authorized Distributor of Atlas
                Copco Indonesia and committed as Company who strive for
                excellence in quality and enhancing our people to grow.
              </Typography>
            </div>
            <Image
              src={certificate}
              alt="about-us-image"
              className="w-9/12"
            />
          </div>
        
      </div>
    </div>
  );
}

export default Authorization;