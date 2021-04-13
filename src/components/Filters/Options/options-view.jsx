import React from "react";
import "./options.scss";

const OptionView = ({
  optionList,
  selected,
  onOptionClick,
  selectedOption,
}) => {
  const renderOption = () => {
    return optionList.map((option) => (
      <div
        className={`option rounded py-1 px-3 mb-3 btn ${
          selectedOption === option ? "selected-option" : "not-selected-option"
        }`}
        onClick={() => {
          onOptionClick(option);
        }}
        key={`option-${option}`}
      >
        {option}
      </div>
    ));
  };
  return <>{renderOption()}</>;
};

export default OptionView;
