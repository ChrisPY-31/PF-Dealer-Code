'use client'
import RutaVideo from "@/components/RutaVideo/RutaVideo";
import Video from "@/components/Video/Video";
import React, { useState } from "react";

const page = () => {

  const [videoId , setVideoId] = useState('')
  return (
    <div className="w-screen h-screen">
      <div className="flex h-5/6">
        <div className="bg-black w-2/3  flex justify-center items-center">
            <Video videoId={videoId}/>
        </div>
        <div className="w-1/3 ">
            <RutaVideo setVideoId={setVideoId}/>
        </div>
      </div>
    </div>
  );
};

export default page;
