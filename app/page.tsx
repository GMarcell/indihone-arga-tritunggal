"use client";

import Home from "./Home/page";
import Authorization from "./authorization/page";
import VisionMision from "./vision-mision/page";
import Service from "./service/page";
import Customers from "./customers/page";
import Contacts from "./contacts/page";
import WayWeDo from "./way-we-do/page";

function HomePage() {
  return (
    <>
      <Home/>
      <Authorization/>
      <VisionMision/>
      <WayWeDo/>
      <Service/>
      <Customers/>
      <Contacts/>
    </>
  );
}

export default HomePage;
