"use client"

import Image from "next/image";
import { TimerContainer } from "./TimerContainer";
import { useEffect, useState } from "react";

export default function Front() {
  const [days, setDays] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [message, setMessage] = useState<string>("");
  const str = '2024-04-06';
  var date1 = new Date(str);
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
        setMessage("The Launch Has Started");
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
    <section
      id="front"
      className="w-full flex flex-col justify-center items-center"
    >
      <div>
        <Image
          src="/images/oficial-logo.png"
          width={500}
          height={500}
          alt="bar citizen valencia logo"
        />
      </div>
      <div className="bg-umbracle-1 bg-no-repeat bg-cover bg-bottom w-full py-12 flex flex-col justify-center items-center gap-12">
        <p className="font-agencyGothicCTBold text-9xl text-white text-shadow">Faltan:</p>
        <TimerContainer
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
        <div className="flex justify-between items-center gap-5 px-5">
          <div className="basis-3/12">
            <Image
              src="/images/umbracle-logo.png"
              width={500}
              height={500}
              alt="logo l'umbreacle"
            />
          </div>
          <div className="basis-3/12">
            <Image
              src="/images/alfilo-logo.png"
              width={500}
              height={500}
              alt="logo organización Al Filo"
            />
          </div>
          <div className="basis-3/12">
            <Image
              src="/images/krakenostrum-logo.png"
              width={500}
              height={500}
              alt="logo organización Krakenostrum"
            />
          </div>
          <div className="basis-3/12">
            <Image
              src="/images/gabol-logo.png"
              width={500}
              height={500}
              alt="logo gabol"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
