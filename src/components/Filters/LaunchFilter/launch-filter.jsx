import React from "react";
import { OptionWrapper } from "../OptionWrapper";
import { FilterOptions } from "../Options";
import { LAUNCH_FILTER } from "../constants";

const LaunchFilter = ({ options, onFilter, selectedFilters }) => {
  //wrapping filter options in common layout using parent compnonent, option component is passed as children
  return (
    <OptionWrapper label="Successful Launch">
      <FilterOptions
        optionList={options}
        onOptionClick={(selOption) => {
          onFilter(LAUNCH_FILTER, selOption);
        }}
        selectedOption={selectedFilters[LAUNCH_FILTER]}
      />
    </OptionWrapper>
  );
};

export default LaunchFilter;
