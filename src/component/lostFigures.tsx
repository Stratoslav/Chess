/* eslint-disable array-callback-return */
import React from "react";
import { FC } from "react";
import { Figure } from "../models/figure/Figure";

interface LostFiguresProps {
  title: string;
  figures: Figure[];
}

export const LostFigres: FC<LostFiguresProps> = ({ title, figures }) => {
  console.log(
    figures.map((c) => {
      <p></p>;
    })
  );
  return (
    <div className="lost">
      <h3>{title}</h3>

      {figures.map((f) => {
        return (
          <div key={f.id}>
            {f.name}{" "}
            {f.logo && <img width={20} height={20} alt="" src={f.logo} />}
          </div>
        );
      })}
    </div>
  );
};
