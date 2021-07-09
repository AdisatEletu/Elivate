import React, { useEffect } from "react";
import { SearchInput } from "../../../components/filters/SearchInput";
// import { DropDown } from "../../../components/dropDown/DropDown";
import { useFilter } from "./useFilter";
import { Menu, Dropdown, Select } from "antd";
import DownOutlined from "@ant-design/icons/es/icons/DownOutlined";


const { Option } = Select;
export const Filter = ({ classNames }) => {
  const { categories, getCategories, loading,handleChange} = useFilter();

  useEffect(() => {
    getCategories();
  }, []);

  // const menu = (
  //   <Menu>
  //     {categories.map((category, index) => (
  //       <Menu.Item>{category.name}</Menu.Item>
  //
  //   </Menu>
  // );
  return (
    <div
      className={`m-flex m-align-items-center justify-content-between ${classNames}`}
    >
      <div className={"d-flex align-items-center justify-content-between"}>
        <div className={'col-md-6'}>
          <Select defaultValue="default" style={{ width: "300px" }} onChange={handleChange}>
            <Option value={'default'}>Category</Option>
            {categories.map((category, index) => (
           
            <Option value={category.id} key={index}>{category.name}</Option>
            ))}
          </Select>
          
        </div>

  {/*      <div className={"filter-width d-flex align-items-center"}>*/}
  {/*        <div> Sort: &nbsp; </div>*/}
  {/*        <div className={""} style={{ width: "70%" }}>*/}
  {/*          /!*<DropDown placeholder={"Popularity"} />*!/*/}
  
  {/*          /!* <div style={{ marginTop: "1px" }}> Sort: &nbsp; </div>*/}
  {/*<div className={""} style={{ width: "70%" }}>*/}
  {/*           <DropDown placeholder={"Popularity"} fontColor="red" /> *!/*/}
  {/*        </div>*/}
  {/*      </div>*/}
      </div>

      <div className={"col-md-4"}>
        <SearchInput />
      </div>
    </div>
  );
};
