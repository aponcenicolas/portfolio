import React, { useState } from "react";
import Categories from "../components/Categories";
import MenuItems from "../components/MenuItems";
import Title from "../components/Title";
import portfolios from "../components/AllPortfolios";

const allCategories = [
  "All",
  ...new Set(portfolios.map((item) => item.category)),
];

const PortfoliosPage = () => {
  const [categories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(portfolios);

  const filter = (category) => {
    if (category === "All") {
      setMenuItems(portfolios);
      return;
    }
    const filterData = portfolios.filter((item) => {
      return item.category === category;
    });
    setMenuItems(filterData);
  };

  return (
    <div className="PortfolioPage">
      <div className="title">
        <Title title={"Portfolios"} span={"portfolios"} />
      </div>
      <div className="portfolios-data">
        <Categories filter={filter} categories={categories} />
        <MenuItems menuItem={menuItems} />
      </div>
    </div>
  );
};

export default PortfoliosPage;
