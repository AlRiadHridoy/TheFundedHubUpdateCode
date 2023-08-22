import { useState } from "react";
import { LinearProgress } from "@mui/material";

export default function CountDown() {
  let [days, setDays] = useState(null);
  let [hours, setHours] = useState(null);
  let [minutes, setminutes] = useState(null);
  let [seconds, setSeconds] = useState(null);

  (function () {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60,
      day = hour * 24;

    //I'm adding this section so I don't have to keep updating this pen every year :-)
    //remove this if you don't need it
    let today = new Date(),
      dd = String(today.getDate()).padStart(2, "0"),
      mm = String(today.getMonth() + 1).padStart(2, "0"),
      yyyy = today.getFullYear(),
      nextYear = yyyy + 1,
      dayMonth = "09/15/",
      release = dayMonth + yyyy;

    today = mm + "/" + dd + "/" + yyyy;
    if (today > release) {
      release = dayMonth + nextYear;
    }
    //end

    const countDown = new Date(release).getTime(),
      x = setInterval(function () {
        const now = new Date().getTime(),
          distance = countDown - now;
        setDays(Math.floor(distance / day));
        setHours(Math.floor((distance % day) / hour));
        setminutes(Math.floor((distance % hour) / minute));
        setSeconds(Math.floor((distance % minute) / second));

        //do something later when date is reached
        if (distance < 0) {
          clearInterval(x);
        }
        //seconds
      }, 0);
  })();

  return (
    <div className=" grid grid-cols-2 sm:flex gap-4 md:gap-16 text-[1.2rem] sm:text-xl md:text-2xl justify-between w-full">
      <div className="days text-center">
        <div>{days}</div>
        <div>DAYS</div>
      </div>
      <div className="hours text-center">
        <div>{hours}</div>
        <div>HOURS</div>
      </div>
      <div className="minutes text-center">
        <div>{minutes}</div>
        <div>MINUTES</div>
      </div>
      <div className="seconds text-center">
        <div>{seconds}</div>
        <div>SECONDS</div>
      </div>
    </div>
  );
}
