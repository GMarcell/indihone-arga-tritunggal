"use client";

import {
  List,
  ListItem,
  ListItemPrefix,
  Typography,
} from "@material-tailwind/react";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
import { BsBrowserEdge } from "react-icons/bs";
import Image from "next/image";
import ContactImage from "@/assets/ContactUs.png";
import { FaRegBuilding } from "react-icons/fa";

export function Contacts() {
  return (
    <section
      className="px-8 py-16 bg-gray-200 min-h-[60vh] flex justify-center items-center"
      id="contacts"
    >
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2">
        <div className='my-auto'>
          <Typography variant="h3" placeholder="" className='!leading-tight text-4xl md:text-6xl text-[#1C3A96] font-bold'>
            Let&apos;s Connect With Us!
          </Typography>
          <Typography variant="h4" placeholder="" className='!leading-tight text-2xl md:text-3xl text-[#1C3A96] font-bold'>
            For Inquiry and Discussion :
          </Typography>
          <List placeholder="" className='mt-5'>
            <ListItem placeholder="" className='flex items-center gap-4'>
              <ListItemPrefix placeholder="">
                <IoCall size={28}/>
              </ListItemPrefix>
              <Typography placeholder="" className='text-xl'>+62 21 352 90 119</Typography>
            </ListItem>
            <ListItem placeholder="" className='flex items-center gap-4'>
              <ListItemPrefix placeholder="">
                <IoMdMail size={28}/>
              </ListItemPrefix>
              <div>
                <Typography placeholder="" className='text-xl'>ales.helpdesk@id-oat.com</Typography>
                <Typography placeholder="" className='text-xl'>
                  operation.helpdesk@id-oat.com
                </Typography>
              </div>
            </ListItem>
            <ListItem placeholder="" className='flex items-center gap-4'>
              <ListItemPrefix placeholder="">
                <BsBrowserEdge size={28}/>
              </ListItemPrefix>
              <Typography placeholder="" className='text-xl'>www.id-oat.com</Typography>
            </ListItem>
          </List>
        </div>
        <div>
          <Image src={ContactImage} alt="" />
          <List placeholder="">
            <ListItem placeholder="" className='flex justify-between'>
              <ListItemPrefix placeholder="" className='w-1/5'>
                <div className="flex justify-center flex-col items-center">
                  <FaRegBuilding size={28}/>
                  <Typography placeholder="">Main</Typography>
                </div>
              </ListItemPrefix>
              <div className="w-full">
                <Typography placeholder=''>18 Office Park 21st Floor.</Typography>
                <Typography placeholder=''>Jl. TB Simatupang No.18, Jakarta Selatan</Typography>
                <Typography placeholder=''>DKI Jakarta - 12520</Typography>
              </div>
            </ListItem>
            <ListItem placeholder="" className='flex justify-between'>
              <ListItemPrefix placeholder="" className='w-1/5'>
                <div className="flex justify-center flex-col items-center">
                  <FaRegBuilding size={28}/>
                  <Typography placeholder="">Operation</Typography>
                </div>
              </ListItemPrefix>
              <div className='w-full'>
                <Typography placeholder=''>Jl. Melati XI. No.41</Typography>
                <Typography placeholder=''>(Buaran Indah Toll Gate Circle Road)</Typography>
                <Typography placeholder=''>Tanah Tinggi, Kota Tangerang - 15119</Typography>
              </div>
            </ListItem>
          </List>
        </div>
      </div>
    </section>
  );
}

export default Contacts;