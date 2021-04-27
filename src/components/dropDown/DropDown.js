import React, { useEffect } from "react";
import {
  DropdownOption,
  DropdownWrapper,
  OptionsWrapper,
  Input,
  Options,
  InputWrapper
} from "../../assets/style";
import {
  bool,
  string,
  func,
  object as objectPropType,
  array as arrayPropType
} from "prop-types";

//Component
export const DropDown = ({
                           options,
                           inputOption,
                           onChange,
                           onSelect,
                           isOpen,
                           toggle,
                           selectedColor,
                           placeholder,
                           className,
                           fontColor,
                         }) => {
  const selectedColorObj = {
    backgroundColor: selectedColor
  };
  const fontColorObj = {
    color: fontColor
  };
  
  useEffect(() => {
    options.sort((a, b) => a.option.localeCompare(b.option));
  }, [options]);
  
  return (
    <DropdownWrapper>
      <InputWrapper>
        <Input
          style={fontColorObj}
          data-testid="click-input"
          onClick={toggle}
          value={inputOption}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
        />
        {isOpen ? (
          <img
            alt="icon"
            width={10}
            src={require("../../assets/icons/arrow-up.svg")}
            height={10}
          />
        ) : (
          <img
            alt="icon"
            width={20}
            height={20}
            src={require("../../assets/icons/arrow-down.svg")}
          />
        )}
      </InputWrapper>
      {/*<img src={require('../../assets/icons/arrow-down.svg')} alt={"ico"}/>*/}
      {isOpen && (
        <OptionsWrapper>
          {options.length > 0 ? (
            <DropdownOption>
              {options.map((option, index) => {
                return (
                  <Options
                    style={
                      option.option === inputOption
                        ? selectedColorObj
                        : fontColorObj
                    }
                    onClick={() => onSelect(option.option)}
                    key={option.uid}
                    className={className}
                  >
                    {option.option}
                  </Options>
                );
              })}
            </DropdownOption>
          ) : (
            <DropdownOption>
              <Options>No data matched.</Options>
            </DropdownOption>
          )}
        </OptionsWrapper>
      )}
    </DropdownWrapper>
  );
};

DropDown.propTypes = {
  options: arrayPropType,
  inputOption: string,
  onChange: func,
  onSelect: func,
  isOpen: bool,
  toggle: func,
  selectedColor: string,
  placeholder: string,
  className: string,
  fontColor: string
};
DropDown.defaultProps = {
  options: [],
  inputOption: "",
  isOpen: false,
  selectedColor: "#ccc",
  placeholder: "select an option",
  className: "",
  fontColor: "#000"
};
