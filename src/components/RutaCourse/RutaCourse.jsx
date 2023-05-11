'use client'
import React from 'react'
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
 
function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  );
}

const RutaCourse = () => {
    const [open, setOpen] = useState(0);
 
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
  return (
    
    <Fragment className='border-2 border-white'>
    <Accordion open={open === 1} icon={<Icon id={1} open={open}  />}>
      <AccordionHeader onClick={() => handleOpen(1)} className='text-2xl'>
        What is Material Tailwind?
      </AccordionHeader>
      <AccordionBody>
        We&apos;re not always in the position that we want to be at.
        We&apos;re constantly growing. We&apos;re constantly making mistakes.
        We&apos;re constantly trying to express ourselves and actualize our
        dreams.
      </AccordionBody>
    </Accordion>
    <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
      <AccordionHeader onClick={() => handleOpen(2)} className='text-2xl'>
        How to use Material Tailwind?
      </AccordionHeader>
      <AccordionBody>
        We&apos;re not always in the position that we want to be at.
        We&apos;re constantly growing. We&apos;re constantly making mistakes.
        We&apos;re constantly trying to express ourselves and actualize our
        dreams.
      </AccordionBody>
    </Accordion>
    
  </Fragment>

  )
}

export default RutaCourse