"use client";

import Image from "next/image";
import { TimerContainer } from "./TimerContainer";
import { useEffect, useState } from "react";

const logos = [
  {name:"AlfiloLogo", src: "/images/alfilo-logo.webp", alt: "logo organización Al Filo"},
  {name:"krakenostrumLogo", src: "/images/krakenostrum-logo.webp", alt: "logo organización Krakenostrum"},
  {name:"umbracleLogo", src: "/images/umbracle-logo.webp", alt: "logo l'umbreacle"},
  {name:"gabolLogo", src: "/images/gabol-logo.webp", alt: "logo gabol"},
  {name:"campingLogo", src: "/images/camping-logo.webp", alt: "logo camping puig campana"},
];

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
            <div className="flex justify-between items-center max-w-6xl w-full p-5 pb-0">
              {logos.map((item) => (
                <div key={item.name}>
                <Image
                  src={item.src}
                  width={500}
                  height={500}
                  alt={item.alt}
                />
              </div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute w-full h-60 bottom-0 bg-gradient-to-t from-black to-transparent"></div>
      </div>
      <div className="bg-gradient-to-br from-black from-[50%] to-transparent to-[51%] h-32"></div>
    </section>
  );
}
