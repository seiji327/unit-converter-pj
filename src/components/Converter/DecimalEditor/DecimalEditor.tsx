import useConverterBoxContext from "../../../hooks/useConverterBoxContext";

import "./decimal-editor.css";

const DecimalEditor = () => {
  const { decimal, setDecimal } = useConverterBoxContext();

  const MIN_DECIMAL = "0";
  const MAX_DECIMAL = "99";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const parsedVal = parseInt(e.target.value);
    if (parsedVal > parseInt(MAX_DECIMAL)) {
      setDecimal(MAX_DECIMAL);
    } else if (parsedVal < parseInt(MIN_DECIMAL) || e.target.value === "") {
      setDecimal(MIN_DECIMAL);
    } else {
      setDecimal(parsedVal.toString());
    }
  };

  const handleMinusClick = () => {
    setDecimal((prev) =>
      parseInt(prev) - 1 < parseInt(MIN_DECIMAL)
        ? MIN_DECIMAL
        : (parseInt(prev) - 1).toString()
    );
  };

  const handlePlusClick = () => {
    setDecimal((prev) =>
      parseInt(prev) + 1 > parseInt(MAX_DECIMAL)
        ? MAX_DECIMAL
        : (parseInt(prev) + 1).toString()
    );
  };

  return (
    <div className="decimal-editor">
      <h4 className="decimal-editor__h4">Decimal</h4>
      <input
        min={MIN_DECIMAL}
        max={MAX_DECIMAL}
        type="number"
        className="decimal-editor__label"
        value={decimal}
        onChange={(e) => handleChange(e)}
      />

      <div className="decimal-editor__buttons">
        <button
          className="decimal-editor__buttons-minus-button"
          onClick={handleMinusClick}
        >
          -
        </button>
        <button
          className="decimal-editor__buttons-plus-button"
          onClick={handlePlusClick}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default DecimalEditor;
