"use client";

import { Typography } from "@material-tailwind/react";
import { PROJECTS, serviceConstans } from "../../constants";
import ProjectCard from "@/components/ProjectCard";

export function Service() {
  return (
    <section className="p-8" id="products">
      <div className="container mx-auto mb-10 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4 text-4xl md:text-6xl text-center text-[#1C3A96] font-bold"
          placeholder=""
        >
          Our Service
        </Typography>
        <Typography
          placeholder=""
          variant="lead"
          className="mx-auto w-full px-4 font-normal text-black"
        >
          PT Ondihon Arga Tritunggal is committed to delivering holistic
          solutions that go with Atlas Copco superior products. Our services are
          tailored to meet the diverse needs of our clients, ensuring excellence
          at every step.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-3">
        {serviceConstans.map((props, idx) => (
          <ProjectCard key={idx} {...props}/>
        ))}
      </div>
    </section>
  );
}

export default Service;