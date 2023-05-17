"use client";
import React from "react";
import { Fragment, useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import {
  caracteristicas,
  fundamentos,
  introduccion,
  piano,
} from "@/app/Introduccion/videos";

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

const RutaCourse = ( {setVideoId} ) => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const handleClick = (id) =>{
   setVideoId(id)
  }
  return (
    <Fragment className="border-2 border-white">
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)} className="text-2xl">
          Introduccion a JavaScript
        </AccordionHeader>
        <AccordionBody>
          {introduccion.map((video) => (
            <p  onClick={()=>handleClick(video.id)} key={video.id}>{video.titulo}</p>
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 2} icon={<Icon id={2} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(2)} className="text-2xl">
          Fundamentos en programacion
        </AccordionHeader>
        <AccordionBody>
          {fundamentos.map((video) => (
            <p  onClick={()=>handleClick(video.id)} key={video.id}>{video.titulo}</p>
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} icon={<Icon id={3} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(3)} className="text-2xl">
          Un piano en javaScript
        </AccordionHeader>
        <AccordionBody>
          {piano.map((video) => (
            <p  onClick={()=>handleClick(video.id)} key={video.id}>{video.titulo}</p>
          ))}
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} icon={<Icon id={4} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(4)} className="text-2xl">
          Caracteristicas Nuevas ES6
        </AccordionHeader>
        <AccordionBody>
          {caracteristicas.map((video) => (
            <p  onClick={()=>handleClick(video.id)} key={video.id}>{video.titulo}</p>
          ))}
        </AccordionBody>
      </Accordion>
    </Fragment>
  );
};

export default RutaCourse;
