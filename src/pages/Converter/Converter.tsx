import { useLocation, useNavigate, Navigate } from "react-router-dom";

import {
  ConverterBox,
  ConverterMiddleWrapper,
  Button,
} from "../../components/Converter";
import { CONVERTER_BOX_ID } from "../../constant/converterConstsnt";

import "./converter.css";

const Converter = () => {
  type StateType = {
    measurementType: string;
  };

  // Get the state from the Home component
  const location = useLocation();
  const navigate = useNavigate();

  // Redirect to Home if URL is directly typed in and no state is passed.
  if (!location.state) return <Navigate to="/" replace />;

  const { measurementType } = location.state as StateType;

  return (
    <main className="converter">
      <Button
        buttonText="BACK"
        handleClick={() => navigate("/")}
        optionalClasses={["converter__back-button"]}
      />
      <h2 className="converter__h2">{measurementType.toUpperCase()}</h2>

      <div className="converter__wrapper">
        <ConverterBox converterBoxID={CONVERTER_BOX_ID.FISRT_BOX} />

        <ConverterMiddleWrapper />

        <ConverterBox converterBoxID={CONVERTER_BOX_ID.SECOND_BOX} />
      </div>
    </main>
  );
};

export default Converter;
