"use client";

import Image from "next/image";
import { TimerContainer } from "./TimerContainer";
import { useEffect, useState } from "react";

export default function Front() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const eventDate = "2024-04-06";
  var date1 = new Date(eventDate);
  var date2 = new Date();
  var diff = Math.abs(date1.getTime() - date2.getTime());
  var time = Math.ceil(diff / (1000 * 3600 * 24));
  const timeToDays = time * 60 * 60 * 24 * 1000;
  let countDownDate = new Date().getTime() + timeToDays;

  useEffect(() => {
    var updateTime = setInterval(() => {
      var now = new Date().getTime();
      var difference = countDownDate - now;
      var newDays = Math.floor(difference / (1000 * 60 * 60 * 24));
      var newHours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var newMinutes = Math.floor(
        (difference % (1000 * 60 * 60)) / (1000 * 60)
      );
      var newSeconds = Math.floor((difference % (1000 * 60)) / 1000);

      setDays(newDays);
      setHours(newHours);
      setMinutes(newMinutes);
      setSeconds(newSeconds);

      if (difference <= 0) {
        clearInterval(updateTime);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
      }
    });

    return () => {
      clearInterval(updateTime);
    };
  }, [time]);

  return (
    <section id="front" className="w-full flex flex-col">
      <div className="w-full relative flex justify-center">
        <Image
          src="/images/oficial-logo.webp"
          width={500}
          height={500}
          alt="bar citizen valencia logo"
        />
      </div>
      <div className="w-full relative flex flex-col justify-center items-center bg-umbracle-1 bg-bottom bg-cover">
        <div className="absolute w-full h-60 top-0 bg-gradient-to-b from-black to-transparent"></div>
        <div className="w-full bg-no-repeat bg-cover bg-bottom pt-12 flex flex-col justify-center items-center gap-12 z-10">
          <p className="font-agencyGothicCTBold text-9xl text-white text-shadow">
            Faltan:
          </p>
          <TimerContainer
            days={days}
            hours={hours}
            minutes={minutes}
            seconds={seconds}
          />
          <div className="wrapper-front-logo w-full flex justify-center items-center gap-5">
            <div className="flex justify-between items-center max-w-6xl w-full p-5 xl:p-0 pb-0">
              <div className="basis-1/5">
                <Image
                  src="/images/alfilo-logo.webp"
                  width={500}
                  height={500}
                  alt="logo organización Al Filo"
                />
              </div>
              <div className="basis-1/5 p-[2%]">
                <Image
                  src="/images/krakenostrum-logo.webp"
                  width={500}
                  height={500}
                  alt="logo organización Krakenostrum"
                />
              </div>
              <div className="basis-1/5">
                <Image
                  src="/images/umbracle-logo.webp"
                  width={500}
                  height={500}
                  alt="logo l'umbreacle"
                />
              </div>
              <div className="basis-1/5">
                <Image
                  src="/images/gabol-logo.webp"
                  width={500}
                  height={500}
                  alt="logo gabol"
                />
              </div>
              <div className="basis-1/5 p-[3%]">
                <Image
                  src="/images/camping-logo.webp"
                  width={500}
                  height={500}
                  alt="logo camping puig campana"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute w-full h-60 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="bg-gradient-to-br from-black from-[50%] to-transparent to-[51%] h-32"></div>
    </section>
  );
}
