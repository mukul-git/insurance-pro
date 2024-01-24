import React from "react";
import { Dropdown } from "@mui/base/Dropdown";
import { MenuButton } from "@mui/base/MenuButton";
import { MenuItem } from "@mui/base/MenuItem";
import { Menu } from "@mui/base/Menu";
import { useState } from "react";
const policiesList = {
  policies: {
    type: [
      {
        health: [
          {
            title: "health policy1",
            description: "This is health policy 1",
            category: "term",
          },
          {
            title: "health policy2",
            description: "This is health policy 2",
            category: "whole",
          },
          {
            title: "health policy3",
            description: "This is health policy 3",
            category: "universal",
          },
          {
            title: "health policy4",
            description: "This is health policy 4",
            category: "term",
          },
        ],
      },
      {
        life: [
          {
            title: "life policy1",
            description: "This is life policy 1",
            category: "individual",
          },
          {
            title: "life policy1",
            description: "This is life policy 2",
            category: "family",
          },
          {
            title: "life policy1",
            description: "This is life policy 3",
            category: "group",
          },
          {
            title: "life policy1",
            description: "This is life policy 4",
            category: "family",
          },
        ],
      },
      {
        property: [
          {
            title: "property policy1",
            description: "This is property policy 1",
            category: "homeowners",
          },
          {
            title: "property policy1",
            description: "This is property policy 2",
            category: "renters",
          },
          {
            title: "property policy1",
            description: "This is property policy 3",
            category: "flood",
          },
          {
            title: "property policy1",
            description: "This is property policy 4",
            category: "flood",
          },
        ],
      },
    ],
  },
};

// const policiesJson = JSON.parse(policiesList);

const Filter = () => {
  const [lifeList, setLifeList] = useState([]);
  const filterByLifeType = (data) => {
    const filteredLifeTypeList = policiesList.policies.type.filter(
      (type) => type.life
    );
    return filteredLifeTypeList;
  };
  setLifeList(filterByLifeType(policiesList));
  const filterByHealthType = () => {};
  const filterByPropertyType = () => {};
  return (
    <div>
      <label style={{ marginLeft: "1em", marginRight: "1em" }}>Filter</label>
      <Dropdown>
        <MenuButton>Type</MenuButton>
        <Menu>
          <MenuItem onClick={filterByLifeType}>Life</MenuItem>
          <MenuItem onClick={filterByHealthType}>Health</MenuItem>
          <MenuItem onClick={filterByPropertyType}>Property</MenuItem>
        </Menu>
      </Dropdown>
    </div>
  );
};

export default Filter;
