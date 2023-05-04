"use client";
import InfoCouse from "@/components/InfoCourse/InfoCouse";
import NavBar from "../Home/components/Nav/NavBar";
import CardCourse from "@/components/CardCourse/CardCourse";
import Addressed from "@/components/Addressed/Addressed";
import Learning from "@/components/Learning/Learning";

const Page = () => {
  return (
    <div className="min-h-screen">
      <NavBar />
      <section className="w-3/4 m-auto ">
        <div className="w-full flex mt-16 gap-10 ">
          <div className="w-2/3">
            <InfoCouse />
          </div>
          <div className="w-4/12">
            <CardCourse />
          </div>
        </div>
        <Addressed />
        <Learning/>
      </section>
    </div>
  );
};

export default Page;
