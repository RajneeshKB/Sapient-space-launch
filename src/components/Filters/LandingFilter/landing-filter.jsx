import React from "react";
import { OptionWrapper } from "../OptionWrapper";
import { FilterOptions } from "../Options";
import { LANDING_FILTER } from "../constants";

const LandingFilter = ({ options, onFilter, selectedFilters }) => {
  //wrapping filter options in common layout using parent compnonent, option component is passed as children
  return (
    <OptionWrapper label="Successful Landing">
      <FilterOptions
        optionList={options}
        onOptionClick={(selOption) => {
          onFilter(LANDING_FILTER, selOption);
        }}
        selectedOption={selectedFilters[LANDING_FILTER]}
      />
    </OptionWrapper>
  );
};

export default LandingFilter;
