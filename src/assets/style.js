import styled from "styled-components";

export const DropdownWrapper = styled("div")`
  width: 100%;
  font-family: sans-serif;
`;

export const Input = styled.input.attrs((props) => ({
  type: "text",
  onChange: props.onChange,
  size: props.size || "16px",
  placeholder: props.placeholder
}))`
  color: #000000;
  font-size: 1em;
  outline: 0;
  margin: 0;
  padding: 0;
  border: none;
  height: 40px;
  width: 100%;
  /* border-bottom: 1px solid #000000; */
`;

export const OptionsWrapper = styled("div")``;

export const DropdownOption = styled("ul")`
  list-style-type: none;
  border: 1px solid #000000;
  max-height: 150px;
  overflow-y: scroll;
  /* margin: 0; */
  padding: 0;
`;
export const Options = styled("li")`
  padding: 15px;
  color: #000000;
  font-weight: 500;
  cursor: pointer;
`;

export const InputWrapper = styled("div")`
  border: none;
  /* border-bottom: 1px solid #000; */
  display: flex;
  align-items: center;
`;
