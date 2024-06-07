import React from "react";
import bgCover from "../assets/bg.jpg";
import Image from "next/image";

export default function Header() {
  return (
    <div className="relative">
      <Image
        className="w-full h-[150px] sm:h-[200px] md:h-[300px] lg:h-[500px] object-cover"
        src={bgCover}
        alt="Background"
      />
      <h1 className="absolute inset-x-0 bottom-0 text-center text-white text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold z-10 bg-black bg-opacity-50 py-4">
        КОМПЬЮТЕР МЭДЭЭЛЛИЙ ТЕХНОЛОГИЙН ТЭНХИМ 4-Р КУРСИЙН ХАМТ ОЛОН
      </h1>
    </div>
  );
}
