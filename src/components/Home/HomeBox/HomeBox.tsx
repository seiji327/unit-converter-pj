import { ReactNode } from "react";

import { Link } from "react-router-dom";
import { Measure } from "convert-units";

import "./home-box.css";

type BoxProps = {
  measurementType: Measure;
  icon: ReactNode;
};

const HomeBox = ({ measurementType, icon }: BoxProps) => {
  return (
    <Link
      className="home-box"
      to="converter"
      state={{ measurementType: measurementType }}
    >
      <h2>{measurementType.toUpperCase()}</h2>
      <div className="home-box__icon">{icon}</div>
    </Link>
  );
};

export default HomeBox;
