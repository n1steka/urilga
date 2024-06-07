import React, { useState } from "react";
import Image from "next/image";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Header from "@/components/Header";
import UrilgaText from "@/components/UrilgaText";
import Counter from "@/components/Counter";
import Location from "@/components/Location";
import logo from "../assets/logo.png";

export default function Home() {
  const ognoo = new Date("June 13, 2024 18:00:00").getTime();
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [s, setS] = useState(false);
  const handleSubmit = async () => {
    try {
      if (email.trim() === "") {
        toast.error("И-мэйл хоосон байна");
        return;
      }
      setLoading(true);
      setS(true);
      await axios
        .post("/api/contact", {
          email,
          name: localStorage.getItem("name"),
          message: "Урилга хүлээн авсан танд баярллаа хөөрхөн мөнхүүш",
        })
        .then((res) => {
          if (res) {
            toast.success("Урилга амжилттай илгээгдлээ");
            setLoading(true), setS(false);
          }
        });
    } catch (error) {
      toast.error("Алдаа гарлаа. Дахин оролдоно уу.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Toaster />
      <div className="h-20 bg-sky-700 flex items-center justify-center">
        <Image src={logo} alt="Logo" className="w-14 h-14 rounded-full" />
      </div>
      <Header />
      <UrilgaText />
      <Counter newYear={ognoo} />
      <span className="w-full  flex justify-center   p-2 text-red-400">
        Хэрвээ та урилгын хүлээн авч байгаа бол хариу мэдэгдэж и-мэйл хаягаа
        оруулан байршилийг авна уу !!
      </span>
      <div className="flex justify-center my-4">
        <div className="flex gap-4">
          <input
            className="w-64 h-12 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
            type="text"
            placeholder="И-мэйл хаяг"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="button"
            disabled={loading}
            onClick={handleSubmit}
            className="px-6 py-2 bg-blue-700 hover:bg-blue-800 text-white rounded-lg focus:ring-4 focus:ring-blue-300 focus:outline-none"
          >
            {s ? "Илгээж байна..." : "Урилга хүлээн авах"}
          </button>
        </div>
      </div>
      {loading && (
        <div className="my-4">
          <h1 className="text-center text-3xl font-semibold text-slate-100 mb-2 bg-sky-900">
            Байршил
          </h1>
          <Location />
        </div>
      )}
    </div>
  );
}
