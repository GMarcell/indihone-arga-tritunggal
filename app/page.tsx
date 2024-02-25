"use client";

import { Typography } from "@material-tailwind/react";
import Lines from "@/components/sub/Lines";

function Home() {
  return (
    <header
      className="bg-[url('/image/BackgroundHero.png')] bg-cover p-8"
      id="home"
    >
      <div className="container mx-auto grid h-full gap-10 min-h-[80vh] w-full grid-cols-1 items-center">
        <div className="lg:pl-24 pl-14">
          <Typography
            placeholder=""
            variant="h1"
            color="white"
            className="mb-4 lg:text-7xl !leading-tight text-3xl md:text-5xl"
          >
            COMPANY PROFILE
          </Typography>
          <Typography
            placeholder=""
            variant="h1"
            color="white"
            className="mb-4 lg:text-3xl !leading-tight text-xl"
          >
            PT ONDIHON ARGA TRITUNGGAL
          </Typography>
          {/* <Typography
            placeholder=""
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit,
            maxime dolorem hic error et rem doloremque molestiae, dolor
            consequatur debitis est libero in repudiandae eos, sunt nostrum a
            quia pariatur.
          </Typography> */}
          <Lines whiteText hideLG={false}/>
        </div>
      </div>
    </header>
  );
}

export default Home;