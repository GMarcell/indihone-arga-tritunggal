"use client";

import React from "react";
import certificate from "@/assets/certificate.png";
import ujiMutu from "@/assets/ujiMutu.png";
import Image from "next/image";
import {
  Typography,
} from "@material-tailwind/react";

function Authorization() {
  return (
    <div className="bg-[url('/image/Auth.png')] bg-cover" id='authorization'>
      <div className="container h-full min-h-[80vh] w-full flex items-center mx-auto py-auto">
        <div className="md:grid md:grid-cols-2 gap-4">
          <div className="px-4">
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
                className="lg:text-2xl text-center md:my-5"
              >
                Since 2023, We are appointed as Authorized Distributor of Atlas
                Copco Indonesia and committed as Company who strive for
                excellence in quality and enhancing our people to grow.
              </Typography>
            </div>
            <Image
              src={certificate}
              alt="about-us-image"
              className="w-full h-auto lg:h-auto"
            />
          </div>

          <div className="flex justify-center">
            <Image
              src={ujiMutu}
              alt="about-us-image"
              className="w-fit"
              
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authorization;