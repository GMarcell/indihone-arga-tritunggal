"use client";

import React from "react";
import VisionMisionImage from "@/assets/VisionMission.png";
import Image from "next/image";
import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import Lines from "@/components/sub/Lines";
import { FaDotCircle } from "react-icons/fa";

function VisionMision() {
  return (
    <div>
      <div
        className="container h-full min-h-[80vh] w-full flex items-center mx-auto my-auto"
        id="vision-mision"
      >
        <div className="md:grid md:grid-cols-2 gap-6 my-auto">
          <div className="md:grid md:grid-rows-2">
            <div className="flex justify-center items-center">
              <div>
                <Typography
                  placeholder=""
                  className=" !leading-tight text-3xl md:text-5xl text-center"
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
                className="lg:text-2xl text-center my-5"
              >
                To be the catalyst for positive change through technology,
                shaping a better future for all.
              </Typography>
            </div>
            <Image
              src={VisionMisionImage}
              alt="about-us-image"
              className="w-full h-auto lg:h-auto"
            />
          </div>

          <div className="md:grid md:grid-rows-2 mx-4">
            <div className="flex justify-center items-center">
              <div>
                <Typography
                  placeholder=""
                  className=" !leading-tight text-3xl md:text-5xl text-center"
                  variant="h2"
                >
                  Our Mission
                </Typography>
                <Lines hideText />
              </div>
            </div>

            <Typography placeholder="" className="lg:text-2xl text-center my-4">
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
                  color="black"
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
                  color="black"
                >
                  Building sustainable and mutually beneficial relationships
                  with our clients, partners, and the community.
                </Typography>
              </ListItem>
            </List>
          </div>
        </div>
      </div>
      {/* <Lines whiteText={false} hideLG /> */}
    </div>
  );
}

export default VisionMision;
