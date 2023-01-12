import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { Collor } from "../models/Collor";
import { Players } from "../models/Players";
interface TimeProps {
  currentPlayer: Players | null;
  restart: () => void;
}
export const Timer: FC<TimeProps> = ({ restart, currentPlayer }) => {
  const [blackTime, setBlackTime] = useState(500);
  const [whiteTime, setWhiteTime] = useState(500);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

  useEffect(() => {
    startTimer();
  }, [currentPlayer]);

  function startTimer() {
    if (timer.current) {
      clearInterval(timer.current);
    }
    const callback =
      currentPlayer?.color === Collor.WHITE
        ? decrimentWhiteTimer
        : decrimentBlackTimer;
    timer.current = setInterval(callback, 1000);
  }

  function decrimentWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
  }
  function decrimentBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function restartTimer() {
    setBlackTime(500);
    setWhiteTime(500);
    restart();
  }
  return (
    <div>
      <div>
        <button onClick={restartTimer}>Restart game</button>
      </div>
      <h2>Black: {blackTime}</h2>
      <h2>White: {whiteTime}</h2>
    </div>
  );
};
