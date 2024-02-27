"use client";

import React from "react";
import VisionMisionImage from "@/assets/VisionMission.png";
import Image from "next/image";
import {
  Carousel,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import Lines from "@/components/sub/Lines";
import { FaDotCircle } from "react-icons/fa";

function VisionMision() {
  return (
    <div className="bg-[url('/image/VisionMissionDark.png')] bg-cover p-8 ">
      <div
        className="container mx-auto grid h-full gap-10 min-h-[80vh] w-full grid-cols-1 items-center my-auto"
        id="vision-mision"
      >
        <div className="carousel w-full">
          <div id="slide1" className="carousel-item relative w-full">
            <div className="flex justify-center items-center  w-full">
              <div className="">
                <div className="flex justify-center items-center ">
                  <div>
                    <Typography
                      placeholder=""
                      className=" !leading-tight text-3xl md:text-7xl md:font-bold text-center text-white"
                      variant="h2"
                    >
                      Our Vision
                    </Typography>
                    <Lines hideText />
                  </div>
                </div>
                <div className="mx-3 my-auto">
                  <Typography
                    placeholder=""
                    className="lg:text-3xl text-center my-5 text-white"
                  >
                    To be the catalyst for positive change through technology,
                    shaping a better future for all.
                  </Typography>
                </div>
              </div>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="">
                ❮
              </a>
              <a href="#slide2" className="">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <div className="md:grid md:grid-rows-2 mx-4">
              <div className="flex justify-center items-center">
                <div>
                  <Typography
                    placeholder=""
                    className=" !leading-tight text-3xl md:text-7xl text-center text-white"
                    variant="h2"
                  >
                    Our Mission
                  </Typography>
                  <Lines hideText />
                </div>
              </div>

              <Typography
                placeholder=""
                className="lg:text-2xl text-center my-4 text-white"
              >
                Empowering individuals and businesses with innovative solutions
                that enhance efficiency, connectivity, and overall well-being.
              </Typography>
              <List placeholder="">
                <ListItem placeholder="" className="gap-4">
                  <ListItemPrefix placeholder="">
                    <FaDotCircle />
                  </ListItemPrefix>
                  <Typography
                    placeholder=""
                    className="lg:text-2xl"
                    color="white"
                  >
                    Fostering a culture of continuous improvement and
                    adaptability.
                  </Typography>
                </ListItem>
                <ListItem placeholder="" className="gap-4">
                  <ListItemPrefix placeholder="">
                    <FaDotCircle />
                  </ListItemPrefix>
                  <Typography
                    placeholder=""
                    className="lg:text-2xl"
                    color="white"
                  >
                    Building sustainable and mutually beneficial relationships
                    with our clients, partners, and the community.
                  </Typography>
                </ListItem>
              </List>
            </div>
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="">
                ❮
              </a>
              <a href="#slide1" className="">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisionMision;
