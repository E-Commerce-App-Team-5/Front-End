import React from "react";
import Layout from "../components/Layout";
import Footer from "../components/Footer";
import UploadCard from "../components/UploadCard";
import UploadedProducts from "../components/UploadedProducts";
import CardsProfiles from "../components/CardsProfiles";

export default function Profiles() {
  return (
    <div>
      <Layout />
      <div className="mx-3 mt-10  md:mx-32 md:mt-20">
        <div className="flex justify-between  md:gap-7 w-full ">
          <CardsProfiles />

          <div className="flex flex-col space-y-7 md:mb-10">
            <UploadCard />
            <UploadedProducts className="mt-[4rem]" />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
};
