import React from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FC } from "react";
import { Collor } from "../models/Collor";
import { Players } from "../models/Players";
import Swal from "sweetalert2";
interface TimeProps {
  currentPlayer: Players | null;
  restart: () => void;
}
export const Timer: FC<TimeProps> = ({ restart, currentPlayer }) => {
  const [blackTime, setBlackTime] = useState(300);
  const [whiteTime, setWhiteTime] = useState(300);
  const timer = useRef<null | ReturnType<typeof setInterval>>(null);

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

  useEffect(() => {
    //startTimer();

    gameOver();
  }, [currentPlayer]);

  function decrimentWhiteTimer() {
    setWhiteTime((prev) => prev - 1);
    if (whiteTime === 0 || null || undefined || "") {
      setWhiteTime(0);
    }
  }
  function decrimentBlackTimer() {
    setBlackTime((prev) => prev - 1);
  }
  function restartTimer() {
    setBlackTime(300);
    setWhiteTime(300);
    restart();
  }
  const startGame = (e: React.SyntheticEvent) => {
    if (e.type === "click") {
      startTimer();
    }
  };
  function gameOver() {
    if (blackTime === 0 || whiteTime === 0) {
      Swal.fire("GAME OVER!", "", "success");
      restartTimer();
    }
  }

  return (
    <div>
      <div>
        <button className="timer__button" onClick={startGame}>
          start
        </button>
        <button className="timer__button" onClick={restartTimer}>
          Restart game
        </button>
      </div>
      <h2 className="h2">Black: {blackTime === 0 ? gameOver() : blackTime}</h2>
      <h2>White: {whiteTime === 0 ? gameOver() : whiteTime}</h2>
    </div>
  );
};
