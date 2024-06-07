import { useEffect, useState } from "react";

export default function Counter({ newYear }) {
  const [day, setDay] = useState(0);
  const [hour, setHour] = useState(0);
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);
  useEffect(() => {
    const updateCounter = () => {
      const now = new Date().getTime();
      const distance = (newYear - now) / 1000;

      if (distance > 0) {
        const days = Math.floor(distance / (60 * 60 * 24));
        const hours = Math.floor((distance % (60 * 60 * 24)) / (60 * 60));
        const minutes = Math.floor((distance % (60 * 60)) / 60);
        const seconds = Math.floor(distance % 60);

        setDay(days);
        setHour(hours);
        setMinute(minutes);
        setSecond(seconds);
      } else {
        clearInterval(timerId);
      }
    };

    const timerId = setInterval(updateCounter, 1000);
    return () => clearInterval(timerId);
  }, [newYear]);

  const arr = [
    {
      name: "Өдөр",
      value: day,
    },
    {
      name: "Цаг",
      value: hour,
    },
    {
      name: "Минут",
      value: minute,
    },
    {
      name: "Секунд",
      value: second,
    },
  ];

  return (
    <div className="flex w-full justify-center  mb-5 mt-[200px]">
      <div className="flex gap-4 flex-wrap justify-center ">
        {arr.map((el, i) => (
          <div
            key={i}
            className="p-3 sm:p-4 md:p-8 lg:p-12 border rounded-3xl bg-sky-300 text-white font-bold flex flex-col items-center"
          >
            <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {el.value}
            </span>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl">
              {el.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
