import RutaVideo from "@/components/RutaVideo/RutaVideo";
import Video from "@/components/Video/Video";
import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen">
      <div className="flex h-5/6">
        <div className="bg-black w-2/3  flex justify-center items-center">
            <Video/>
        </div>
        <div className="w-1/3 ">
            <RutaVideo/>
        </div>
      </div>
    </div>
  );
};

export default page;
