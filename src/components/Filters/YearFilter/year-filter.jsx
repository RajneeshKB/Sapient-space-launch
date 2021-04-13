import React from "react";
import { OptionWrapper } from "../OptionWrapper";
import { FilterOptions } from "../Options";
import { YEAR_FILTER } from "../constants";

const YearFilter = ({ options, onFilter, selectedFilters }) => {
  //wrapping filter options in common layout using parent compnonent, option component is passed as children
  return (
    <OptionWrapper label="Launch Year">
      <FilterOptions
        optionList={options}
        onOptionClick={(selOption) => {
          onFilter(YEAR_FILTER, selOption);
        }}
        selectedOption={selectedFilters[YEAR_FILTER]}
      />
    </OptionWrapper>
  );
};

export default YearFilter;
