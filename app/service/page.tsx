"use client";

import { Button, Typography } from "@material-tailwind/react";
import { PROJECTS, serviceConstans } from "../../constants";

export default function Service() {
  return (
    <section className="p-8 bg-gray-200" id="service">
      <div className="container mx-auto mb-10 text-center ">
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
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20">
        <div className="carousel w-full min-h-[50vh]">
          <div id="service1" className="carousel-item relative w-full">
            <div className="flex justify-center text-center items-center w-full bg-[url('/image/service1.png')] bg-cover">
              <div className="px-5">
                <Typography
                  placeholder=""
                  className="md:text-4xl text-2xl font-bold "
                  color="white"
                >
                  COMPRESSED AIR SYSTEM
                </Typography>
                <Typography
                  placeholder=""
                  className="md:text-xl font-medium mt-5"
                  color="white"
                >
                  Leverage our advanced problem analytics services to gain
                  valuable insights for having correct compressed air solution,
                  promote efficiency campaign, and drive customer business
                  growth.
                </Typography>
                <button className="btn btn-outline btn-warning mt-5">See Products</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#service3" className="">
                ❮
              </a>
              <a href="#service2" className="">
                ❯
              </a>
            </div>
          </div>
          <div id="service2" className="carousel-item relative w-full">
            <div className="flex justify-center text-center items-center w-full bg-[url('/image/service2.png')] bg-cover">
              <div className="px-5">
                <Typography
                  placeholder=""
                  className="md:text-4xl text-2xl font-bold "
                  color="white"
                >
                  GAS GENERATION SYSTEM
                </Typography>
                <Typography
                  placeholder=""
                  className="md:text-xl font-medium mt-5"
                  color="white"
                >
                  Analyze our customer needs in N2/O2 uses in advance way and
                  deliver significant efficiency on customer Life Cycle Cost.
                  And produce peace of mind for customer
                </Typography>
                <button className="btn btn-outline mt-5">See Products</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#service1" className="">
                ❮
              </a>
              <a href="#service3" className="">
                ❯
              </a>
            </div>
          </div>
          <div id="service3" className="carousel-item relative w-full">
            <div className="flex justify-center text-center items-center w-full bg-[url('/image/service3.png')] bg-cover">
              <div className="px-5">
                <Typography
                  placeholder=""
                  className="md:text-4xl text-2xl font-bold "
                  color="white"
                >
                  ENGINEERING AND INSTALLATION
                </Typography>
                <Typography
                  placeholder=""
                  className="md:text-xl font-medium mt-5"
                  color="white"
                >
                  Delivery in superb design and timely control construction
                  phase. We live in detail for each specification. Project
                  Management expertise in line with superior quality of
                  engineering team
                </Typography>
                <button className="btn btn-outline mt-5">See Products</button>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#service2" className="">
                ❮
              </a>
              <a href="#service1" className="">
                ❯
              </a>
            </div>
          </div>
        </div>
        {/* {serviceConstans.map((props, idx) => (
            <ProjectCard key={idx} {...props} />
          ))} */}
      </div>
    </section>
  );
}
