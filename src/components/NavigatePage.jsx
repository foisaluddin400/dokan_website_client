"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { TbArrowRotaryLeft } from "react-icons/tb";


const NavigatePage = ({ title }) => {
  const router = useRouter();

  return (
    <div className="font-montserrat mb-5">
      <div className="flex items-center justify-between">
        
        <h1
          onClick={() => router.back()}
          className="flex items-center gap-3 cursor-pointer"
        >
          <button className="border border-border w-6 h-6 rounded-full  flex justify-center items-center hover:bg-primary transition">
            <TbArrowRotaryLeft/>
          </button>

          <span className="text-lg text-text font-semibold">
            {title || "Back"}
          </span>
        </h1>

      </div>
    </div>
  );
};

export default NavigatePage;