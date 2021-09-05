import React, { useEffect } from "react";
import { SearchInput } from "../../../components/filters/SearchInput";
// import { DropDown } from "../../../components/dropDown/DropDown";
import { useFilter } from "./useFilter";
import { Menu, Dropdown, Select } from "antd";

const { Option } = Select;
export const Filter = ({ classNames, setRaffles, endpoint, sortEndpoint }) => {
  const {
    categories,
    getCategories,
    loading,
    handleChange,
    handleSortChange,
  } = useFilter({ setRaffles, endpoint, sortEndpoint });

  useEffect(() => {
    getCategories();
  }, []);
  return (
    <div
      className={`m-flex m-align-items-center justify-content-between ${classNames}`}
    >
      <div className={"d-flex align-items-center justify-content-between"}>
        <div className={"col-md-6 d-flex"}>
          <Select
            defaultValue="default"
            style={{ width: "300px" }}
            onChange={handleChange}
          >
            <Option value={"default"}>Category</Option>
            {categories.map((category, index) => (
              <Option value={category.id} key={index}>
                {category.name}
              </Option>
            ))}
          </Select>
          <div
            className="d-flex justify-content-around black black-color align-items-center fw-500"
            style={{ width: "150px" }}
          >
            Sort By:
          </div>
          <Select
            defaultValue=""
            style={{ width: "300px" }}
            onChange={handleSortChange}
          >
            <Option value={""}>Recently added</Option>
            <Option value={`popularity=1`}>Popularity</Option>
            <Option value={"price=0"}>Lowest token</Option>
            <Option value={"price=1"}>Highest token</Option>
          </Select>
        </div>
      </div>

      <div className={"col-md-4"}>
        <SearchInput />
      </div>
    </div>
  );
};
