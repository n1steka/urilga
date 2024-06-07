import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import bg from "../assets/invite.jpg";
import Image from "next/image";

export default function UrilgaText() {
  const [name, setName] = useState("");
  const router = useRouter();
  useEffect(() => {
    // Fetch data from localStorage during client-side rendering
    const storedName = localStorage.getItem("name");
    if (storedName) {
      setName(storedName);
    } else {
      router.push("/login");
    }
  }, [router]);

  return (
    <div className="relative flex justify-center items-center  my-[200px] mb-5">
      <div className="absolute inset-0 flex justify-center items-center">
        <Image
          src={bg}
          alt="Background"
          width={1000}
          height={600}
          objectFit="cover"
          className="z-0"
        />
      </div>
      <div className="z-10 max-w-lg p-8 bg-black bg-opacity-50 shadow-lg rounded-lg text-center text-white">
        <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-serif font-semibold mb-4">
          Хүндэт багш {name},
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-serif">
          ...... таныг Д.Баттөр багштай 2020-2024 оны "Програм хангамж" ангийн
          төгсөгчдөд диплом, энгэрийн тэмдэг гардуулах үйл ажиллагаа, төгсөлийн
          баярын үйл ажиллагаанд хүрэлцэн ирэхийг урьж байна.
        </p>
      </div>
    </div>
  );
}
