import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
export default function LoginForm() {
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  const handleClick = () => {
    if (phone === "88054406" && password === "4406") {
      localStorage.setItem("name", "Өсөхжаргал");
      setTimeout(() => {
        router.push("/");
      }, 3000);
      return toast.success("Сайн байна уу Өсөхжаргал багшаа");
    }
    if (phone === "99856545" && password === "6545") {
      localStorage.setItem("name", "Баярсайхан");
      setTimeout(() => {
        router.push("/");
      }, 3000);
      return toast.success("Сайн байна уу Өсөхжаргал багшаа");
    }
    if (phone === "99995509" && password === "5509") {
      localStorage.setItem("name", "Ганзориг");
      setTimeout(() => {
        router.push("/");
      }, 3000);
      return toast.success("Сайн байна уу Өсөхжаргал багшаа");
    }
    if (phone === "88008108" && password === "8108") {
      localStorage.setItem("name", "Баттөр ");
      setTimeout(() => {
        router.push("/");
      }, 3000);
      return toast.success("Сайн байна уу Өсөхжаргал багшаа");
    }

    toast.error("Утасны дугаар эсвэл нууц үг буруу байна");
  };

  return (
    <div>
      <Toaster />
      <div
        className="bg-no-repeat bg-cover bg-center relative"
        style={{
          backgroundImage:
            "url(https://as1.ftcdn.net/v2/jpg/07/61/49/50/1000_F_761495055_Yfns2CQILs0xgLeClnEca8BAlv7AynhR.jpg)",
        }}
      >
        <div className="absolute bg-gradient-to-b  opacity-75 inset-0 z-0 "></div>
        <div className="min-h-screen flex flex-col justify-center items-center p-2">
          <div className="p-6 sm:p-10 md:p-16 lg:p-24 w-full max-w-md z-10 bg-white rounded-2xl shadow-lg">
            <div className="mb-4">
              <h3 className="font-semibold text-2xl text-gray-800">
                Та эхлээд нэвтэрнэ үү
              </h3>
            </div>
            <div className="space-y-5">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 tracking-wide">
                  Багш та өөрийн дугаараа оруулна уу
                </label>
                <input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="text"
                  placeholder="99998888"
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label className="mb-5 text-sm font-medium text-gray-700 tracking-wide">
                  Утасны дугаарын сүүлийн 4 орон
                </label>
                <input
                  className="w-full text-base px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                  type="password"
                  placeholder="8888"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center bg-sky-400 hover:bg-green-500 text-gray-100 p-3 rounded-full tracking-wide font-semibold shadow-lg cursor-pointer transition ease-in duration-500"
                  onClick={handleClick}
                >
                  Нэвтрэх
                </button>
              </div>
            </div>
            <div className="pt-5 text-center text-gray-400 text-xs">
              <span>
                Copyright © 2020-2024
                <a
                  href=""
                  rel="noopener noreferrer"
                  target="_blank"
                  title="Ajimon"
                  className="text-green-500 hover:text-green-700 ml-2"
                >
                  Хөгжүүлэгч Хөөрхөн Мөнхүүш
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
