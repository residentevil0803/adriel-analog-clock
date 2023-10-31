import React, { useEffect } from "react";

import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { selectTime, tick } from "../redux/time.slice";

const Clock: React.FC = () => {
  const dispatch = useAppDispatch();
  const time = new Date(useAppSelector(selectTime));

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(tick());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const rotation = {
    second: time.getSeconds() * 6,
    minute: time.getMinutes() * 6 + time.getSeconds() * 0.1,
    hour: (time.getHours() % 12) * 30 + time.getMinutes() * 0.5,
  };

  return (
    <div className="clock">
      <div
        className="hour-hand"
        style={{ transform: `rotate(${rotation.hour}deg)` }}
      />
      <div
        className="minute-hand"
        style={{ transform: `rotate(${rotation.minute}deg)` }}
      />
      <div
        className="second-hand"
        style={{ transform: `rotate(${rotation.second}deg)` }}
      />
    </div>
  );
};

export default Clock;
