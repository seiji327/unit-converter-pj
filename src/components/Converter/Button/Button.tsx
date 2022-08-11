import "./button.css";

type PropType = {
  buttonText: string;
  handleClick: () => void;
  optionalClasses?: string[];
};

const Button = ({ buttonText, handleClick, optionalClasses }: PropType) => {
  return (
    <button
      className={`btn${optionalClasses ? " " + optionalClasses.join(" ") : ""}`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default Button;
