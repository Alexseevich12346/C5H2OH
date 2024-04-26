import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const endTime = new Date();

  useEffect(() => {
    endTime.setDate(endTime.getDate() + 18);
    endTime.setHours(endTime.getHours() + 18);
    endTime.setMinutes(endTime.getMinutes() + 18);
    endTime.setSeconds(endTime.getSeconds() + 18);

    const intervalId = setInterval(() => {
      const currentTime = new Date();
      const diff = endTime - currentTime;

      setSeconds(Math.floor((diff / 1000) % 60));
      setMinutes(Math.floor((diff / 1000 / 60) % 60));
      setHours(Math.floor((diff / (1000 * 60 * 60)) % 24));
      setDays(Math.floor(diff / (1000 * 60 * 60 * 24)));

      if (diff < 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="time">
      <span className="time_times">{days} Дней</span>
      <span className="time_times">{hours} Часов</span>
      <span className="time_times">{minutes} Минут</span>
      <span className="time_times">{seconds} Секунд</span>
    </div>
  );
};

export default Countdown;
